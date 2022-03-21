#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Def inition Template
@tag
Feature: 
  I want to automate the AdactinWebPage
  @tag2
  Scenario Outline: Adactin WebPage Automatopn
    Given I want to open the Adactin WebPage and Automate
    When I enter the "<userName>" and "<password>" 
     When I clicked the login button 
    Then I verify the homepage

    Examples: 
      | userName  | password      |
      | britto619 | bunt353bey150 |
      | britto619 | bunt353bey150 |
      
      @tag1
  Scenario: Search the hotel
    Given I want to select to the hotel
    When select the location hotel roomtype numberOfRooms
   	And enter the date in
    And enter the date out
    And enter the adultInRoom, childInRoom
    And click the search
      
Scenario: Book the hotel
    Given I want to Book the hotel
    When Enter the FirstName LastName Billing Address CreditCardNo
   	And select the cardType expiryMonth expiryYear 
    And enter the cvvNumber
      