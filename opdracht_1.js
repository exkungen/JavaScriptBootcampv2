    var Apple = "apple";
    var Banana =1;
        var Peer =  true;
            var School = false;
                var Cherry = 32;
                    var SuperMan ="superpowers";
                        var Fly = 444;
                            var Bird = true;
                                var Snake = false;
                                    var Tiger = 3245;
                                        var Table = "bowArrow";
                                            var Math = "math";
                                                var Fire = 233;
                                                    var Water = "waterIsCold";
                                                        var Ice = "melt";
    function listProperties(obj) {
        var propList = "";
        for(var propName in obj) {
            if(typeof(obj[propName]) != "undefined") {
                propList += (propName + ", ");
            }
        }
        alert(propList);
    }