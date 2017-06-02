window.onload = function() {
    var navigatorMessageMap = {
        'mac': 'macos',
        'iphone': 'macos',
        'win32': 'windows'
    }

    document.getElementById('download').addEventListener('dblclick', hideMessage, false)

    function hideMessage(){
        var blocks = document.getElementsByClassName("show")[0]
        blocks.className = "hide";
    }
    //debugger;
    document.getElementById('download').addEventListener('click', showMessage)
    


    function showMessage(){
    var platform = navigator.platform.toLowerCase();
    var blocks = document.getElementsByClassName("download-message");

    for (var key in navigatorMessageMap) {
        key = key.toLowerCase();
        var version = navigatorMessageMap[key];

        if (key === platform) {

            for (var i = 0; i < blocks.length; i++) {
                var elem = blocks[i];
                if (elem.getAttribute('data-version') === version) {
                    elem.className = "show";

                    //console.log(elem.classList)
                    }
                }

            }
        }
    }


}
	

	//navigator.languages; navigator.language 