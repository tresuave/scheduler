package com.app.scheduler.mood.respository;

import org.springframework.data.repository.CrudRepository;

import com.app.scheduler.mood.model.MoodModel;



public interface MoodRepo extends CrudRepository <MoodModel, Long> {

	}



