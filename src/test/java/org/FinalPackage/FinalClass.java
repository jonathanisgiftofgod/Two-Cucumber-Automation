package org.FinalPackage;

import java.io.IOException;

import org.base.adactin.BaseClass;
import org.junit.BeforeClass;
import org.pageElements.adactin.PageElementsForAdactin;
import org.pageElements.adactin.PageElementsForBook;
import org.pageElements.adactin.PageElementsSearchHotel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class FinalClass extends BaseClass{
	PageElementsForAdactin p;
	PageElementsSearchHotel s;
	PageElementsForBook b;

	@Given("I want to open the Adactin WebPage and Automate")
	public void i_want_to_open_the_Adactin_WebPage_and_Automate() {
		launchUrl("https://adactinhotelapp.com/");
		maximizeAndWait();
	}

	@When("I enter the {string} and {string}")
	public void i_enter_the_and(String userName, String password) {
		p = new PageElementsForAdactin();
		enterText(p.getUser(), userName);
		enterText(p.getPass(), password);
	}

	@When("I clicked the login button")
	public void i_clicked_the_login_button() {
		click(p.getLogin());
	}

	@Then("I verify the homepage")
	public void i_verify_the_homepage() {
		System.out.println("All the best");
//		boolean contains = verify(p.getVerify()).contains("Welcome to Adactin Group of Hotels");
//		Assert.assertEquals(contains, true);
	}

	@Given("I want to select to the hotel")
	public void i_want_to_select_to_the_hotel() {
		System.out.println("Select the Room");
	}

	@When("select the location hotel roomtype numberOfRooms")
	public void select_the_location_hotel_roomtype_numberOfRooms() throws NumberFormatException, IOException {
		s = new PageElementsSearchHotel();
		selectByIndex(s.getLocation(), Integer.parseInt(readExcel("Sheet2", 0, 0)));
		selectByIndex(s.getHotel(), Integer.parseInt(readExcel("Sheet2", 1, 0)));
		selectByIndex(s.getRoomType(), Integer.parseInt(readExcel("Sheet2", 2, 0)));
		selectByIndex(s.getRoomNumber(), Integer.parseInt(readExcel("Sheet2", 3, 0)));
	}

	@When("enter the date in")
	public void enter_the_date_in() throws IOException {
		clear(s.getDateIn());
		enterText(s.getDateIn(), readExcel("Sheet2", 4, 0));
	}

	@When("enter the date out")
	public void enter_the_date_out() throws IOException {
		clear(s.getDateOut());
		enterText(s.getDateOut(), readExcel("Sheet2", 5, 0));
	}

	@When("enter the adultInRoom, childInRoom")
	public void enter_the_adultInRoom_childInRoom() throws NumberFormatException, IOException {
		selectByIndex(s.getAdult(), Integer.parseInt(readExcel("Sheet2", 6, 0)));
		selectByIndex(s.getChild(), Integer.parseInt(readExcel("Sheet2", 7, 0)));
	}

	@When("click the search")
	public void click_the_search() {
		click(s.getSubmit());
		click(s.getRadio());
		click(s.getContinues());
	}

	@Given("I want to Book the hotel")
	public void i_want_to_Book_the_hotel() {
		System.out.println("Book a hotel");
	}

	@When("Enter the FirstName LastName Billing Address CreditCardNo")
	public void enter_the_FirstName_LastName_Billing_Address_CreditCardNo() throws IOException {
		b = new PageElementsForBook();
		enterText(b.getFirstName(), readExcel("Sheet3", 0, 0));
		enterText(b.getLasttName(), readExcel("Sheet3", 1, 0));
		enterText(b.getAddress(), readExcel("Sheet3", 2, 0));
		enterText(b.getCardNumber(), readExcel("Sheet3", 3, 0));
	}

	@When("select the cardType expiryMonth expiryYear")
	public void select_the_cardType_expiryMonth_expiryYear() throws NumberFormatException, IOException {
		selectByIndex(b.getCCType(), Integer.parseInt(readExcel("Sheet3", 4, 0)));
		selectByIndex(b.getExpMonth(), Integer.parseInt(readExcel("Sheet3", 5, 0)));
		selectByIndex(b.getExpYear(), Integer.parseInt(readExcel("Sheet3", 6, 0)));
	}

	@When("enter the cvvNumber")
	public void enter_the_cvvNumber() throws IOException {
		enterText(b.getCvvNumber(), readExcel("Sheet3", 7, 0));
		click(b.getBook());
	}
}
