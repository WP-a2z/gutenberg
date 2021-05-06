<?php
/**
 * Server-side rendering of the `core/post-content` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/post-content` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post content of the current post.
 */
function gutenberg_render_block_core_post_content( $attributes, $content, $block ) {
	static $seen_ids = array();

	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$post_id = $block->context['postId'];

	if ( isset( $seen_ids[ $post_id ] ) ) {
		if ( ! is_admin() ) {
			trigger_error(
				sprintf(
					// translators: %s is a post ID (integer).
					__( 'Could not render Post Content block with post ID: <code>%s</code>. Block cannot be rendered inside itself.' ),
					$post_id
				),
				E_USER_WARNING
			);
		}

		$is_debug = defined( 'WP_DEBUG' ) && WP_DEBUG &&
			defined( 'WP_DEBUG_DISPLAY' ) && WP_DEBUG_DISPLAY;
		return $is_debug ?
			// translators: Visible only in the front end, this warning takes the place of a faulty block.
			__( '[block rendering halted]' ) :
			'';
	}

	$seen_ids[ $post_id ] = true;

	if ( ! in_the_loop() ) {
		the_post();
	}

	$content = get_the_content( null, false, $post_id );

	if ( empty( $content ) ) {
		unset( $seen_ids[ $post_id ] );
		return '';
	}

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'entry-content' ) );
	/** This filter is documented in wp-includes/post-template.php */
	$content = apply_filters( 'the_content', str_replace( ']]>', ']]&gt;', $content ) );
	unset( $seen_ids[ $post_id ] );

	return (
		'<div ' . $wrapper_attributes . '>' .
			$content .
		'</div>'
	);
}

/**
 * Registers the `core/post-content` block on the server.
 */
function gutenberg_register_block_core_post_content() {
	register_block_type_from_metadata(
		__DIR__ . '/post-content',
		array(
			'render_callback' => 'gutenberg_render_block_core_post_content',
		)
	);
}
add_action( 'init', 'gutenberg_register_block_core_post_content', 20 );
