<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title><?php wp_title(); ?></title>
        <?php wp_head(); ?>
        <link href="<?php echo get_stylesheet_uri(); ?>" rel="stylesheet"/>
        <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/main.js"></script>
    <head>
    <body>
        <div id="conteneur">
            <header id="bandeau">
                <h1><?php bloginfo('name'); ?></h1>
                <div id="recherche"><?php get_search_form(); ?></div>
            </header>
            <nav id="menu">
                <?php wp_nav_menu(array('theme_location' => 'menu_principal')); ?>
            </nav>