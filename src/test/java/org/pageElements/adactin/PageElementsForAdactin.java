package org.pageElements.adactin;

import org.base.adactin.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageElementsForAdactin extends BaseClass{
	public PageElementsForAdactin() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="username")
	private WebElement user;
	@FindBy(id="password")
	private WebElement pass;
	@FindBy(id="login")
	private WebElement login;
	@FindBy(xpath="//td[contains(text(),'Welcome to Adactin Group of Hotels')]")
	private WebElement verify;
	public WebElement getUser() {
		return user;
	}
	public WebElement getPass() {
		return pass;
	}
	public WebElement getLogin() {
		return login;
	}
	public WebElement getVerify() {
		return verify;
	}
	
}
