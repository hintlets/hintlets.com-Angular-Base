<?php

?>
[
    <?php for ($i = 0; $i < 20; $i++) { ?>
    {"id": "<?=$i+1?>", "firstName": "F<?=$i?>", "lastName": "L<?=$i?>", "age": "<?=20+$i?>"} <?php if($i<19) { ?>,<?php } ?>
    <?php } ?>

]