
      /* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      let changeTitle = function (newTitle) {
        if (document.title != newTitle) {
            document.title = newTitle;
     }
     /*console.log(newTitle);*/



      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      document.getElementById("MyHeading").title.add('MyClass');
      if ( document.getElementById("MyHeading").title.contains('MyClass') )
      {
      document.getElementById("MyHeading").title.toggle('MyClass');
      }

      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

let my_div = document.getElementById('my_div');

let text_to_change = my_div.childNodes[0];

text_to_change.nodeValue = 'new text';

     /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

    let newUrl = function () {
        document.querySelector("a").href = "https://www.google.com/"
        //
      };

    /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

    let secondList = ["Cat", "Dog", "Elk", "Monkey"];
    secondList.push("Fish");

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      const addParagraph = function (content) {
        //
      };

      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      const firstUlDisappear = function () {
        //
      };

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      const paintItGreen = function () {
        //
      };

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        //
      };

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function () {
        //
      };

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");
      // ...

      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        //
      };

      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */ };