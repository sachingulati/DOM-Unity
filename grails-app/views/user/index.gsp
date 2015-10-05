
<%@ page import="com.dom.unity.User" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'user.label', default: 'User')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-user" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-user" class="content scaffold-list" role="main">
            <div style="margin: 5px">
                <g:textField name="firstName" class="du-group-user" placeholder="First Name"/>
                <g:textField name="lastName" class="du-group-user" placeholder="Last Name"/>
                <g:textField name="city" class="du-group-user" placeholder="City"/>
            </div>
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Salary</th>
					</tr>
				</thead>
				<tbody>
				<g:each in="${userInstanceList}" status="i" var="userInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">

                        <td>${userInstance.firstName}</td>
                        <td>${userInstance.lastName}</td>
                        <td>${userInstance.city}</td>
                        <td>${userInstance.email}</td>
                        <td>${userInstance.age}</td>
                        <td>${userInstance.salary}</td>
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${userInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
