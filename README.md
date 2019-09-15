# Share Buttons

Simple share buttons for these networks:
- Facebook
- Twitter
- WhatsApp
- Email
- Pinterest

## Usage

CSS files:
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous"/>
<link href="dist/share-buttons.css" rel="stylesheet">
```

HTML code: 
```
<div class="sb--container">
    <a href="#" class="sb--button sb--facebook" data-url="http://www.example.com">
        <i class="fa fa-facebook-official fa-fw"></i><span>Share</span>
    </a>
    <a href="#" class="sb--button sb--twitter" data-url="http://www.example.com" data-via="@example" data-text="SHARE...">
        <i class="fa fa-twitter fa-fw"></i><span>Tweet</span>
    </a>
    <a href="#" class="sb--button sb--mail" data-url="http://www.example.com" data-subject="TITLE...">
        <i class="fa fa-envelope fa-fw"></i><span>Mail</span>
    </a>
    <a href="#" class="sb--button sb--whatsapp" data-url="http://www.example.com" data-text="TITLE...">
        <i class="fa fa-whatsapp fa-fw"></i><span>Teilen</span>
    </a>
    <a href="#" class="sb--button sb--pinterest" data-url="http://www.example.com" data-media="http://www.example.com/image-123.jpg">
        <i class="fa fa-pinterest fa-fw"></i><span>Teilen</span>
    </a>
</div>
```

JS files:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="dist/share-buttons.js"></script>
```