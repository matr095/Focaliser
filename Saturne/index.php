<?php get_header(); ?>
<div style="display:inline-block;">
<section>
    <?php
        //le loop de wordpress
        if (have_posts()) {
            while(have_posts()) {
                the_post();
                ?>
                    <h2><?php the_title(); ?></h2>
                    <a href="<?php the_permalink(); ?>">
                        <figure class="intro"><?php the_post_thumbnail('thumbnail'); ?></figure>
                    </a>
                    <?php the_content('Lire la suite'); ?>
                    <p>Ecrit par <?php the_author(); ?></p>
                    <p>Ecrit le <?php the_time(get_option('date_format')); ?></p>
                <?php
            }
        }
    ?>
</section>
<?php get_template_part('sidebar'); ?>
</div>
<?php get_footer(); ?>