// Typewriter js code here
const typewriter = function(textElement,words,wait = 300){
      this.textElement = textElement;
      this.words       = words;
      this.txt         = '';
      this.wordIndex   = 0;
      this.wait        = parseInt(wait, 10);
      this.type();
      this.isDeleting = false; 
    }
    // Type Method
    typewriter.prototype.type = function(){
      const current = this.wordIndex % this.words.length;
      // Get full text of current words
      const fullText = this.words[current];
      // Check if deleting
      if (this.isDeleting) {
        // Remove Char
        this.txt = fullText.substring(0, this.txt.length - 1);
      }else{
        // Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
      }
      // insert text into element
      this.textElement.innerHTML = `<span class='txt'>${this.txt}</span>`;
      // type speed
      let typeSpeed = 300;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
      // if words complete
      if (!this.isDeleting && this.txt === fullText) {
        // make pause at end
        typeSpeed = this.wait;
        // set delete to true
        this.isDeleting = true;
      }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // pause befor start typeing
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
    // Init on DOM Loaded
    document.addEventListener('DOMContentLoaded', init);
    // Init App 
    function init(){
      const textElement = document.querySelector('.txt-type'); 
      const words  = JSON.parse(textElement.getAttribute('data-words'));
      const wait   = textElement.getAttribute('data-wait');
      // init typewriter
      new typewriter(textElement,words,wait);

    }