function playerViewModel() {
    var self = this;

    self.characterList = ko.observableArray();

    self.new_character_name = ko.observable();
    
    self.cid = ko.observable();


    self.loadProfile = function() {
        $.getJSON('/getcharacters/', function(data) {
            $.each( data.char, function( key ) {
                // console.log(val[key].char_name);
                self.characterList.push({name: data.char[key].char_name, cid: data.char[key].char_id});
            });
        });
    };

    self.newchar_path = ko.computed(function() {
        return "/add_character/" + self.new_character_name();
    }, this);

    self.main = function () {
        self.loadProfile();
    };

  self.main();
}