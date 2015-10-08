# jquery-ellipsis V1.0
A simple omit the extra text plugin by jquery...
## Getting Started

### Including it on your page
```html
<script type="text/javascript" src="jquery-ellipsis-1.0.min.js"></script>
```

##Usage

Let's start with the basic markup:

```html
<p class="text_ellipsis">Smile to life whatever and whenever.</p>
```

And your JavaScript should look like this:

```js
$(function () {
	$(".text_ellipsis").ellipsis({"maxLength": 30});
})
```

##Options

```js
$('.text_ellipsis').ellipsis({
  // the maximum text length and beyond will be replaced with ellipses
  maxLength: 30,
  
  // whether to open the prompt, the default open state, the value is true
  openTip: false
});
```

##Dependencies
To start using ellipsis.js, you will need the following:

* [jQuery](http://jquery.com/download/)

##Wouldn't it be simple? I wish you a happy, welcome all of your suggestions.
