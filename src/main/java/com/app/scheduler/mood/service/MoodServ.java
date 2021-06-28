package com.app.scheduler.mood.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.app.scheduler.mood.model.MoodModel;
import com.app.scheduler.mood.respository.MoodRepo;


@Service
public class MoodServ {
@Autowired


	MoodRepo moodrepo;

	//get all of the scheduled activities
	public Iterable <MoodModel> getMood() {
		return moodrepo.findAll();
	}

	public MoodModel findMood(Long id) {
		return moodrepo.findById(id).get();
	}

	public MoodModel createMood(MoodModel item) {
		return moodrepo.save(item);
	}

	public HttpStatus deleteMood(Long id) {
		moodrepo.deleteById(id);
		return HttpStatus.OK;
	}

	public MoodModel updateMood(MoodModel item) {
		return moodrepo.save(item);
	}

	}


