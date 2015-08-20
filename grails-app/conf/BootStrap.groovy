import domunity.User
import groovy.json.JsonSlurper

class BootStrap {

    def init = { servletContext ->
        if(!User.count()){
            Map data = new JsonSlurper().parse(new File("grails-app/conf/employees.json"))
            data.data.each{
                new User(it).save(flush: true, failOnError: true)
            }
        }
    }
    def destroy = {
    }
}
