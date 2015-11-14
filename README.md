# DOM-Unity
Global methods
   public variables:
      1. config
         Type: json object or function which returns json object
         Description: this is user defined configs, this overrides the defaultConfig
      2. data
         Type: json object or function which returns json object
         Description: this is additional data, it is also sent with every request, this is overrided by element values on page and importantData
      3. importantData
         Type: json object or function which returns json object
         Description: this is additional data, it is also sent with every request, this overrides element values on page

   private variables:
      1. namespace
         Type: String
         Description: this is the namespace for the plugin, plugin can be accessed with this name, it is also used in prefix
      2. apiInstance:
         Type: object
         Description: this is plugin's instance variable for internal use
      3. requestNum:
         Type: object
         Description: this is a map which stores groupName as key and request number as its value, used for rendering latest requests only
      4. defaultConfig:
         Type: json object or function which returns json object
         Description: this stores all the default configs of the application, user can override this with config

   public methods:
      1. getGroupNames(element):
            Description:
               with arguments: jquery selector for a dom element is provided, and it returns names of all groups that element belongs to
               without arguments: returns names of all groups in page.
      2. getGroups(element):
            Description: same as getGroupNames, but instead of names it returns group objects
      3. getElements(groupName):
            Description:
               with arguments: takes group name as argument and return dom elements associated with that group
               without arguments: returns all elements associated with any group on page.

   private methods:
      1. getClassInfo(element, prefix):
            Description: this extract the information from class attribute of element
      2. init: initialization of plugin

Group Methods:
   public variables:
      1.
   private variables:
      1.
   public methods:
      1.
   private methods:
      1.


