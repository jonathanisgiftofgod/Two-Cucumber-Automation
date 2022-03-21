package org.pageElements.adactin;

import org.base.adactin.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageElementsSearchHotel extends BaseClass {
	public PageElementsSearchHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement location;
	@FindBy(id="hotels")
	private WebElement hotel;
	@FindBy(id="room_type")
	private WebElement roomType;
	@FindBy(id="room_nos")
	private WebElement RoomNumber;
	@FindBy(id="datepick_in")
	private WebElement DateIn;
	@FindBy(id="datepick_out")
	private WebElement DateOut;
	@FindBy(id="adult_room")
	private WebElement Adult;
	@FindBy(id="child_room")
	private WebElement child;
	@FindBy(id="Submit")
	private WebElement submit;
	@FindBy(id="radiobutton_0")
	private WebElement Radio;
	@FindBy(id="continue")
	private WebElement continues;
	
	public WebElement getLocation() {
		return location;
	}
	public WebElement getHotel() {
		return hotel;
	}
	public WebElement getRoomType() {
		return roomType;
	}
	public WebElement getRoomNumber() {
		return RoomNumber;
	}
	public WebElement getDateIn() {
		return DateIn;
	}
	public WebElement getDateOut() {
		return DateOut;
	}
	public WebElement getAdult() {
		return Adult;
	}
	public WebElement getChild() {
		return child;
	}
	public WebElement getSubmit() {
		return submit;
	}
	public WebElement getRadio() {
		return Radio;
	}
	public WebElement getContinues() {
		return continues;
	}
	
}
