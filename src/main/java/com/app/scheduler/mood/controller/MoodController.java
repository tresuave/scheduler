package com.app.scheduler.mood.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.scheduler.mood.model.MoodModel;
import com.app.scheduler.mood.service.MoodServ;
@CrossOrigin
@Controller
@RestController
@RequestMapping("/mood")
public class MoodController {
	
		@Autowired
		MoodServ moodserv;
//		Get	
		@GetMapping
		public Iterable <MoodModel> getMood() {
			return moodserv.getMood();
			}
//		Get By ID
		@GetMapping("/{id}")
		public MoodModel findMood(@PathVariable Long id) {
			return moodserv.findMood(id);
		}
//		Post
		@PostMapping
		public MoodModel createMood(@RequestBody MoodModel item) {
			return moodserv.createMood(item);
			}
//		Delete
		@DeleteMapping("/{id}")
		public HttpStatus deleteMood(@PathVariable Long id) {
			return moodserv.deleteMood(id);
		}
//		Update
		@PatchMapping
		public MoodModel updateMood(@RequestBody MoodModel item) {
			return moodserv.updateMood(item);
		}
}
