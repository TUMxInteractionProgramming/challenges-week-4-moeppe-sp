/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel = {
    name: 'SevenContinents',
    createdOn: new Date('April 1, 2016'),
    createdBy: 'minus.plus.yummy',
    starred: true,
    expiresIn: 100,
    messageCount: 999,
};
var currentLocation = {
    latitude: 48.186948,
    longitude: 11.574883,
    what3words: 'schwellen.zeit.lippe'
};

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelObject) {
    currentChannel = channelObject;
    //Log the channel switch
    console.log("Tuning in to channel", channelObject);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = '#' + channelObject.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelObject.createdBy + '" target="_blank"><strong>' + channelObject.createdBy + '</strong></a>';

    /* #6 #liking channels on #click */
    let typeOfStar = channelObject.starred ? 'fas' : 'far';
    $('#channel-star').removeClass("fas far");
    $('#channel-star').addClass(typeOfStar);
    //$('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelObject.name + ')').addClass('selected');


}

/* #6 #liking a channel on #click */
function star() {
    currentChannel.starred = !currentChannel.starred;
    $('#channel-star').toggleClass("fas");
    $('#channel-star').toggleClass("far");
    $('#channels li:contains(' + currentChannel.name + ') span .fa-star').toggleClass("fas");
    $('#channels li:contains(' + currentChannel.name + ') span .fa-star').toggleClass("far");
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
