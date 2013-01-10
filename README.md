A simple way of displaying design mockups in a webpage for review.

## Overview ## 
Client side tool to display a set of design mockups in a web page.
Add your design mockups to the /mockups directory and add the filenames
to index.html. 

The use case for it is to drop it into the Public directory in Dropbox,
grab the Public URL to the index.html file, and send it to your client.
It gives them nav buttons to view Next & Previous images.

It could also be used to display mockups using S3.

## Usage ##
* Add your design mockup images to the /mockups directory (.jpg, .png, .gif)
* Add the file names of the images in the array in index.html (around line 27)

```javascript
<script>
    var aa = {} || aa;<br/>
    // Add your mockup images to the /mockups directory and
    // add the filenames to the array below:
    // For example:
    // aa.mockups = ['home-mockup.jpg', 
    // 				 'about-mockup.png', 
    // 				 'registration-mockup.gif'
    // 	];
    aa.mockups = [

	];
</script>
```

Images should be added to the array in the order you'd like them to appear
to the client.