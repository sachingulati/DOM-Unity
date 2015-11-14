# DOM-Unity
Global methods
   public variables:
      1. config: this is user defined configs, this overrides the defaultConfig
      >2. events: this is global event array, filtering is triggered on these events.
      3. data: this is a json object, it is also sent with every request, this is overrided by element values on page and impData
      -4. getUserData: this is also json object,

   private variables:
      1. namespace: this is the namespace for the plugin, plugin can be accessed with this name,
         it is also used in prefix. This is private because this is initialized with the plugin initialization.
      2. apiInstance: to use plugin object inside plugin
      3. requestNum: this stores the request number, so that old request doesn't override new request, this needs planning
      4. defaultConfig: this stores all the default configs of the application, user can override this with config
      >5. allEvents:
      6.


   public methods:
      -1. getGroupNames [getGroups]:
            with arguments: jquery selector for a dom element is provided, and it returns names of all groups that element belongs to
            without arguments: returns names of all groups in page.
      -2. getGroups: same as getGroupNames, but instead of names it returns group objects
      -3. getElements [elements]:
            with arguments: takes group name as argument and return dom elements associated with it
            without arguments: returns all elements associated with any group on page.
      -4: getUserData: it is called on every request and the data received from it, is sent with every request. it overrides data object and element values on page
      >5: addEvent(selector, event): adds event to an element
      >6: getEvents(selector): get events on an element
      >7: updateEvents: updates events on an element
      8:

   private methods:
      -1. getUniqueGroupNames [getUniqueGroups]: returns names of all groups on page
      2. getClassInfo: this extract the information from classes, it takes element and prefix as argument
      3. initDefaultEvents: this initialize default events
      4. init: initialization

Group Methods:
   public variables:
      1.
   private variables:
      1.
   public methods:
      1.
   private methods:
      1.