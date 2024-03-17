<?php
    add_theme_support('post_thumbnails');

    function register_my_menus() {
        register_nav_menu(
            array(
                'menu_principal' => __('Menu Principal'),
                'menu_pied' => __('Menu pied')
            )
        );
    }

    add_action('init', 'register_my_menus');

    register_sidebars(1);

?>