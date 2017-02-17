/**
 *  @fileoverview Text layout helper tool.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */

 /**
  *A TextOut Object
  *Keep track of paramaters and functions for text rendering
  */
 class textout {
     /**
     *@constructor
     */
     constructor(){
         this.there="yes";
     }

     /** Update font size with slider. */
     static updatetext(){
         document.getElementById('contentarea').setAttribute('style','font-size: ' + document.getElementById('fontsize').value +"pt;" );
     }

     /** Update margin with slider. */
     static updatemargin(){
         document.getElementById('contentarea')
         var ptags = document.getElementsByClassName("content_text");
         for (var i = 0; i < ptags.length; i++ ){
             var ptag = ptags[i];
             ptag.setAttribute('style', 'margin: ' + document.getElementById('marginsize').value + "px;" );
         }
     }

     /** Update serifs. */
     static updateserifs(){
        if (document.getElementById("serifs").checked){
            document.getElementById('textarea').setAttribute('style','font-family: georgia');
        }else{
            document.getElementById('textarea').setAttribute('style','font-family: arial');
        }
    }
}
