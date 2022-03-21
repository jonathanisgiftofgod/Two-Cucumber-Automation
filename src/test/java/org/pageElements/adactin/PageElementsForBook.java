package org.pageElements.adactin;

import org.base.adactin.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageElementsForBook extends BaseClass {
	public PageElementsForBook() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement FirstName;
	@FindBy(id="last_name")
	private WebElement LasttName;
	@FindBy(id="address")
	private WebElement Address;
	@FindBy(id="cc_num")
	private WebElement CardNumber;
	@FindBy(id="cc_type")
	private WebElement CCType;
	@FindBy(id="cc_exp_month")
	private WebElement ExpMonth;
	@FindBy(id="cc_exp_year")
	private WebElement ExpYear;
	@FindBy(id="cc_cvv")
	private WebElement CvvNumber;
	@FindBy(id="book_now")
	private WebElement Book;
	
	public WebElement getFirstName() {
		return FirstName;
	}
	public WebElement getLasttName() {
		return LasttName;
	}
	public WebElement getAddress() {
		return Address;
	}
	public WebElement getCardNumber() {
		return CardNumber;
	}
	public WebElement getCCType() {
		return CCType;
	}
	public WebElement getExpMonth() {
		return ExpMonth;
	}
	public WebElement getExpYear() {
		return ExpYear;
	}
	public WebElement getCvvNumber() {
		return CvvNumber;
	}
	public WebElement getBook() {
		return Book;
	}
	
	
}
