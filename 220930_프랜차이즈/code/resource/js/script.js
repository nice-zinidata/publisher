$(document).ready(function() {
    //인풋 폼 css 효과
    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
  
    var $ripples = $('.ripples');
  
    $ripples.on('click.Ripples', function(e) {
  
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.ripplesCircle');
  
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
  
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
  
      $this.addClass('is-active');
  
    });
  
    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });

    //캔버스 그리기
function canvas2() {    
    var baseURL = "resource/images/frame/";

    var canvas = document.querySelector("#canvas2");
    var context = canvas.getContext("2d", { alpha: false });

    var sprite = {
        frame: 0,
        lastFrame: -1,
        totalFrames: 33, 
        textures: []
    };

    var animation = new TimelineMax({
        repeat: -1,
        repeatDelay: 1,
        yoyo: false,
        paused: false,
        onUpdate: drawSprite
    })
    .to(sprite, 2, { 
        frame: sprite.totalFrames - 1, 
        roundProps: "frame",
        ease: Linear.easeNone
    });

    loadTextures(sprite.totalFrames)
    .then(resizeCanvas)
    .catch(function(reason) {
    console.log(reason)
      });

    function drawSprite() {
  
    // No changes
    if (sprite.frame === sprite.lastFrame) {
        return;
    }
  
    context.drawImage(sprite.textures[sprite.frame], 0, 0); 
    sprite.lastFrame = sprite.frame;
    }

    function resizeCanvas(textures) {
   
    var texture = textures[0];  
    sprite.textures = textures;
  
    canvas.width = texture.naturalWidth || texture.width;
    canvas.height = texture.naturalHeight || texture.height;
    canvas.classList.add("is-loaded");
  
    var aspectRatio = canvas.height / canvas.width;
  
    // Make it responsive 
    TweenLite.set("#container2", {
    paddingBottom: "calc(100% * " + aspectRatio + ")"
  });

  // We're ready to go!
  animation.play(); 
}

function loadTextures(numTextures) {
  
  var promises = [];
  
  for (var i = 1; i <= numTextures; i++) {
       
    var index = i < 10 ? "0" + i : i;
    
    // loadTexture returns a promise. It resolves when image is loaded
    promises.push(loadTexture(baseURL + "frame1_00" + index + ".jpg"));
  }    
  
  // Resolves when all the promises are resolved
    return Promise.all(promises);
}

function loadTexture(path) {
  return new Promise(function(resolve, reject) {

    var img = new Image();

    img.onload = function() {
      resolve(img);
    }
    
    img.onerror = function() {
      reject("Error loading " + path);
    };  

    img.src = path;
  });
}

}//end of canvas2

canvas2();


function canvas3() {    
  var baseURL = "resource/images/frame/";

  var canvas = document.querySelector("#canvas3");
  var context = canvas.getContext("2d", { alpha: false });

  var sprite = {
      frame: 0,
      lastFrame: -1,
      totalFrames: 33, 
      textures: []
  };

  var animation = new TimelineMax({
      repeat: -1,
      repeatDelay: 1,
      yoyo: false,
      paused: false,
      onUpdate: drawSprite
  })
  .to(sprite, 2, { 
      frame: sprite.totalFrames - 1, 
      roundProps: "frame",
      ease: Linear.easeNone
  });

  loadTextures(sprite.totalFrames)
  .then(resizeCanvas)
  .catch(function(reason) {
  console.log(reason)
    });

  function drawSprite() {

  // No changes
  if (sprite.frame === sprite.lastFrame) {
      return;
  }

  context.drawImage(sprite.textures[sprite.frame], 0, 0); 
  sprite.lastFrame = sprite.frame;
  }

  function resizeCanvas(textures) {
 
  var texture = textures[0];  
  sprite.textures = textures;

  canvas.width = texture.naturalWidth || texture.width;
  canvas.height = texture.naturalHeight || texture.height;
  canvas.classList.add("is-loaded");

  var aspectRatio = canvas.height / canvas.width;

  // Make it responsive 
  TweenLite.set("#container3", {
  paddingBottom: "calc(100% * " + aspectRatio + ")"
});

// We're ready to go!
animation.play(); 
}

function loadTextures(numTextures) {

var promises = [];

for (var i = 1; i <= numTextures; i++) {
     
  var index = i < 10 ? "0" + i : i;
  
  // loadTexture returns a promise. It resolves when image is loaded
  promises.push(loadTexture(baseURL + "frame2_00" + index + ".jpg"));
}    

// Resolves when all the promises are resolved
  return Promise.all(promises);
}

function loadTexture(path) {
return new Promise(function(resolve, reject) {

  var img = new Image();

  img.onload = function() {
    resolve(img);
  }
  
  img.onerror = function() {
    reject("Error loading " + path);
  };  

  img.src = path;
});
}

}//end of canvas3

canvas3();



function canvas4() {    
    var baseURL = "resource/images/frame/";

    var canvas = document.querySelector("#canvas4");
    var context = canvas.getContext("2d", { alpha: false });

    var sprite = {
        frame: 0,
        lastFrame: -1,
        totalFrames: 14, 
        textures: []
    };

    var animation = new TimelineMax({
        repeat: -1,
        repeatDelay: 1,
        yoyo: false,
        paused: true,
        onUpdate: drawSprite
    })
    .to(sprite, 2, { 
        frame: sprite.totalFrames - 1, 
        roundProps: "frame",
        ease: Linear.easeNone
    });

    loadTextures(sprite.totalFrames)
    .then(resizeCanvas)
    .catch(function(reason) {
    console.log(reason)
      });

    function drawSprite() {
  
    // No changes
    if (sprite.frame === sprite.lastFrame) {
        return;
    }
  
    context.drawImage(sprite.textures[sprite.frame], 0, 0); 
    sprite.lastFrame = sprite.frame;
    }

    function resizeCanvas(textures) {
   
    var texture = textures[0];  
    sprite.textures = textures;
  
    canvas.width = texture.naturalWidth || texture.width;
    canvas.height = texture.naturalHeight || texture.height;
    canvas.classList.add("is-loaded");
  
    var aspectRatio = canvas.height / canvas.width;
  
    // Make it responsive 
    TweenLite.set("#container4", {
    paddingBottom: "calc(100% * " + aspectRatio + ")"
  });

  // We're ready to go!
  animation.play(); 
}

function loadTextures(numTextures) {
  
  var promises = [];
  
  for (var i = 1; i <= numTextures; i++) {
       
    var index = i < 10 ? "0" + i : i;
    
    // loadTexture returns a promise. It resolves when image is loaded
    promises.push(loadTexture(baseURL + "frame3_00" + index + ".jpg"));
  }    
  
  // Resolves when all the promises are resolved
    return Promise.all(promises);
}

function loadTexture(path) {
  return new Promise(function(resolve, reject) {

    var img = new Image();

    img.onload = function() {
      resolve(img);
    }
    
    img.onerror = function() {
      reject("Error loading " + path);
    };  

    img.src = path;
  });
}

}//end of canvas4

canvas4();


function canvas7() {    
    var baseURL = "resource/images/frame/";

    var canvas = document.querySelector("#canvas7");
    var context = canvas.getContext("2d", { alpha: false });

    var sprite = {
        frame: 0,
        lastFrame: -1,
        totalFrames: 26, 
        textures: []
    };

    var animation = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        paused: false,
        onUpdate: drawSprite
    })
    .to(sprite, 2, { 
        frame: sprite.totalFrames - 1, 
        roundProps: "frame",
        ease: Linear.easeNone
    });

    loadTextures(sprite.totalFrames)
    .then(resizeCanvas)
    .catch(function(reason) {
    console.log(reason)
      });

    function drawSprite() {
  
    // No changes
    if (sprite.frame === sprite.lastFrame) {
        return;
    }
  
    context.drawImage(sprite.textures[sprite.frame], 0, 0); 
    sprite.lastFrame = sprite.frame;
    }

    function resizeCanvas(textures) {
   
    var texture = textures[0];  
    sprite.textures = textures;
  
    canvas.width = texture.naturalWidth || texture.width;
    canvas.height = texture.naturalHeight || texture.height;
    canvas.classList.add("is-loaded");
  
    var aspectRatio = canvas.height / canvas.width;
  
    // Make it responsive 
    TweenLite.set("#container7", {
    paddingBottom: "calc(100% * " + aspectRatio + ")"
  });

  // We're ready to go!
  animation.play(); 
}

function loadTextures(numTextures) {
  
  var promises = [];
  
  for (var i = 1; i <= numTextures; i++) {
       
    var index = i < 10 ? "0" + i : i;
    
    // loadTexture returns a promise. It resolves when image is loaded
    promises.push(loadTexture(baseURL + "frame6_00" + index + ".jpg"));
  }    
  
  // Resolves when all the promises are resolved
    return Promise.all(promises);
}

function loadTexture(path) {
  return new Promise(function(resolve, reject) {

    var img = new Image();

    img.onload = function() {
      resolve(img);
    }
    
    img.onerror = function() {
      reject("Error loading " + path);
    };  

    img.src = path;
  });
}

}//end of canvas5

canvas7();

});//end of document ready