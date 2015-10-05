var domUnity = new function () {
    var namespace = "du";
    var apiInstance = this;
    var requestNum = 0;
    var defaultConfig = {
        preventDuplicateSubmission: true,
        renderLatestOnly: true
    };

    this.config = {};
    this.events = ['change', 'keyup'];
    var allEvents = $.merge([], this.events);
    this.data = {};

    var getUniqueGroups = function () {
        var $elements = apiInstance.elements();
        var groupNames = [];
        $.each($elements, function (i, v) {
            var groups = apiInstance.getGroups(v);
            $.each(groups, function (i, v) {
                if (groupNames.indexOf(v) < 0) {
                    groupNames.push(v);
                }
            })
        });
        return groupNames;
    };
    var getClassInfo = function (element, prefix) {
        var $element = $(element);
        if (!$element || !$element.length) {
            return []
        }
        var classes = $element.attr("class");
        if (!classes) {
            return []
        }
        classes = classes.split(/\s+/);
        if (!classes.length) {
            return []
        }
        classes = classes.filter(function (value) {
            return value.match("^" + namespace + "-" + prefix + "-") ? true : false;
        });
        if (!classes || !classes.length) {
            return []
        }
        $.each(classes, function (i, v) {
            classes[i] = v.replace(namespace + "-" + prefix + "-", '');
        });
        return classes;
    };
    this.getGroups = function (element) {
        if (typeof element == 'undefined') {
            return getUniqueGroups();
        }
        return getClassInfo(element, "group")
    };

    this.elements = function (groupName) {
        var $elements = $('[class*=du-' + (groupName ? groupName : '') + ']');
        $elements = $elements.filter(function (i, val) {
            return apiInstance.getGroups(val) ? true : false
        });
        return $elements;
    };
    var initDefaultEvents = function () {

    };
    this.submit = function (groupName) {
        if (typeof groupName == 'undefined') {
            console.log("submit all groups");
        } else if (typeof groupName == 'string') {
            console.log("submit " + groupName);
        }
    };
    this.addEvent = function (selector, event) {
        if (typeof event != 'string') {
            return;
        }
        if (allEvents.indexOf(event) < 0) {
            allEvents.push(event);
        }
        $(selector).on(event + "." + namespace, function () {
            var groups = apiInstance.getGroups(this);
            $.each(groups, function (i, v) {
                apiInstance.submit(v);
            });
        });
    };
    this.getEvents = function (selector) {
        if(typeof selector == 'undefined'){
            return allEvents;
        }
        var $element = $(selector);
        if (!$element || !$element.length) {
            return null
        }
        var classes = $element.attr("class");
        if (!classes) {
            return null
        }
        classes = classes.split(/\s+/);
        if (!classes.length) {
            return null
        }
        classes = classes.filter(function (value) {
            return value.match("^" + namespace + "-event-") ? true : false;
        });
        if (!classes || !classes.length) {
            return null
        }
        $.each(classes, function (i, v) {
            classes[i] = v.replace(namespace + "-", '');
        });
        return classes;
    };
    this.updateEvents = function (selector) {
        var $element = $(selector);
        $.each(allEvents, function (i, v) {
            $element.unbind(v + "." + namespace);
        });
        // remove all events:

    };
    var init = function () {
        initDefaultEvents();

    };
    return this;
};