var gaHelper = {
    event: function(category,action,label) {
        ga('send','event', category, action, label)
    }   
}


// Example to send a gaEvent
//gaHelper.event('cat','act','visualizou')
