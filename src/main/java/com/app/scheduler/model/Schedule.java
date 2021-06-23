package com.app.scheduler.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//signifies this data is an entity and table
@Entity
@Table(name = "scheduler")
public class Schedule {

@Id
@Column
@GeneratedValue

private Long id;

@Column
private int week;

@Column
private String Monday;

@Column
private String Tuesday;
	
@Column
private String Wednesday;
	
@Column
private String Thursday;
	
@Column
private String Friday;
	
@Column
private String Saturday;
	
@Column
private String Sunday;
	
public Schedule() {}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getWeek() {
		return week;
	}

	public void setWeek(int week) {
		this.week = week;
	}

	public String getMonday() {
		return Monday;
	}

	public void setMonday(String monday) {
		Monday = monday;
	}

	public String getTuesday() {
		return Tuesday;
	}

	public void setTuesday(String tuesday) {
		Tuesday = tuesday;
	}

	public String getWednesday() {
		return Wednesday;
	}

	public void setWednesday(String wednesday) {
		Wednesday = wednesday;
	}

	public String getThursday() {
		return Thursday;
	}

	public void setThursday(String thursday) {
		Thursday = thursday;
	}

	public String getFriday() {
		return Friday;
	}

	public void setFriday(String friday) {
		Friday = friday;
	}

	public String getSaturday() {
		return Saturday;
	}

	public void setSaturday(String saturday) {
		Saturday = saturday;
	}

	public String getSunday() {
		return Sunday;
	}

	public void setSunday(String sunday) {
		Sunday = sunday;
	}	
	





	
}
