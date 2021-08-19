package grg.model.cars;

import java.util.Date;

public class Car {
	private int did;
	private String make;
	private String model;
	private String color;
	private int price;
	private String photo;
	private Date dob;
	
	public Car() {
		
	}

	public Car(int did, String make, String model, String color, int price, String photo, Date dob) {
		super();
		this.did = did;
		this.make = make;
		this.model = model;
		this.color = color; 
		this.price = price;
		this.photo = photo;
		this.dob = dob;
	}


	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}

	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	public String getModel() {
		return model;
	}
	
	public void setModel(String model) {
		this.model = model;
	}
	
	@Override
	public String toString() {
		return "Car [did=" + did + ", make=" + make + ", model=" + model + ", color=" + color + ", photo=" + photo
				+ ", dob=" + dob + ", price=" + price + "]";
	}

	

	
	

	
	
}
