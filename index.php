<?php
require_once 'includes/header.php';
use Carbon\Carbon;

$categories = getCategories();

?>

<section>
    <div class="container">
        <h2 class="text-center mt-5">Catégories d'événements</h2>
        <div class="row mt-5">
            <?php foreach ($categories as $category) { ?>
                <div class="card col-2 text-center py-4 d-flex m-auto">
                    <div class="card-body">
                        <a class="h5 nav-link" href="category.php?id=<?php echo $category['id'] ?>"><?php echo $category['name'] ?></a>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>
