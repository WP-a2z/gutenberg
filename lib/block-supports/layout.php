<?php
/**
 * Layout block support flag.
 *
 * @package gutenberg
 */

/**
 * Registers the layout block attribute for block types that support it.
 *
 * @param WP_Block_Type $block_type Block Type.
 */
function gutenberg_register_layout_support( $block_type ) {
	$support_layout = false;
	if ( property_exists( $block_type, 'supports' ) ) {
		$support_layout = _wp_array_get( $block_type->supports, array( '__experimentalLayout' ), false );
	}
	if ( $support_layout ) {
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( ! array_key_exists( 'layout', $block_type->attributes ) ) {
			$block_type->attributes['layout'] = array(
				'type' => 'object',
			);
		}
	}
}

/**
 * Renders the layout config to the block wrapper.
 *
 * @param  string $block_content Rendered block content.
 * @param  array  $block         Block object.
 * @return string                Filtered block content.
 */
function gutenberg_render_layout_support_flag( $block_content, $block ) {
	$block_type     = WP_Block_Type_Registry::get_instance()->get_registered( $block['blockName'] );
	$support_layout = false;
	if ( $block_type && property_exists( $block_type, 'supports' ) ) {
		$support_layout = _wp_array_get( $block_type->supports, array( '__experimentalLayout' ), false );
	}
	if ( ! $support_layout || ! isset( $block['attrs']['layout'] ) ) {
		return $block_content;
	}

	$used_layout = $block['attrs']['layout'];
	if ( isset( $used_layout['inherit'] ) && $used_layout['inherit'] ) {
		$tree           = WP_Theme_JSON_Resolver::get_merged_data( array(), 'theme' );
		$default_layout = _wp_array_get( $tree->get_settings(), array( 'defaults', 'layout' ) );
		if ( ! $default_layout ) {
			return $block_content;
		}
		$used_layout = $default_layout;
	}

	$id           = uniqid();
	$content_size = isset( $used_layout['contentSize'] ) ? $used_layout['contentSize'] : null;
	$wide_size    = isset( $used_layout['wideSize'] ) ? $used_layout['wideSize'] : null;

	$style = '';
	if ( $content_size || $wide_size ) {
		ob_start();
		?>
			<?php echo '.wp-container-' . $id; ?> > * {
				max-width: <?php echo $content_size ? $content_size : $wide_size; ?>;
				margin-left: auto;
				margin-right: auto;
			}

			<?php echo '.wp-container-' . $id; ?> > .alignwide {
				max-width: <?php echo $wide_size ? $wide_size : $content_size; ?>;
			}

			<?php echo '.wp-container-' . $id; ?> .alignfull {
				max-width: none;
			}
		<?php
		$style = ob_get_clean();
	}

	ob_start();
	?>
		<?php echo '.wp-container-' . $id; ?> .alignleft {
			float: left;
			margin-right: 2em;
		}

		<?php echo '.wp-container-' . $id; ?> .alignright {
			float: right;
			margin-left: 2em;
		}
	<?php
	$style .= ob_get_clean();

	// This assumes the hook only applys to blocks with a single wrapper.
	// I think this is a reasonable limitation for that particular hoook.
	$content = preg_replace(
		'/' . preg_quote( 'class="', '/' ) . '/',
		'class="wp-container-' . $id . ' ',
		$block_content,
		1
	);

	return $content . '<style>' . $style . '</style>';
}

// Register the block support.
WP_Block_Supports::get_instance()->register(
	'layout',
	array(
		'register_attribute' => 'gutenberg_register_layout_support',
	)
);
add_filter( 'render_block', 'gutenberg_render_layout_support_flag', 10, 2 );

/**
 * For themes without theme.json file, make sure
 * to restore the inner div for the group block
 * to avoid breaking styles relying on that div.
 *
 * @param  string $block_content Rendered block content.
 * @param  array  $block         Block object.
 * @return string                Filtered block content.
 */
function gutenberg_restore_group_inner_container( $block_content, $block ) {
	$group_with_inner_container_regex = '/(^(\s|\S)*<div\b[^>]*wp-block-group(\s|")[^>]*>)(([\s]|\S)*<div\b[^>]*wp-block-group__inner-container(\s|")[^>]*>)((.|\S|\s)*)/';

	if (
		'core/group' !== $block['blockName'] ||
		WP_Theme_JSON_Resolver::theme_has_support() ||
		1 === preg_match( $group_with_inner_container_regex, $block_content )
	) {
		return $block_content;
	}

	$replace_regex   = '/(^(\s|\S)*<div\b[^>]*wp-block-group[^>]*>)((.|\S|\s)*)(<\/div>(\s|\S)*$)/m';
	$updated_content = preg_replace_callback(
		$replace_regex,
		function( $matches ) {
			return $matches[1] . '<div class="wp-block-group__inner-container">' . $matches[3] . '</div>' . $matches[5];
		},
		$block_content
	);

	return $updated_content;
}

add_filter( 'render_block', 'gutenberg_restore_group_inner_container', 10, 2 );
