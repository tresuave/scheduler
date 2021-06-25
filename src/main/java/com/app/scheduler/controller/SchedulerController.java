package com.app.scheduler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.scheduler.model.Schedule;
import com.app.scheduler.service.ScheduleServ;


@RestController
@RequestMapping("/schedule")
public class SchedulerController {

	@Autowired
	ScheduleServ schedulerserv;
//	Get	
	@GetMapping
	public Iterable <Schedule> getSchedule() {
		return schedulerserv.getSchedule();
		}
//	Get By ID
	@GetMapping("/{id}")
	public Schedule findSchedule(@PathVariable Long id) {
		return schedulerserv.findSchedule(id);
	}
//	Post
	@PostMapping
	public Schedule createSchedule(@RequestBody Schedule item) {
		return schedulerserv.createSchedule(item);
		}
//	Delete
	@DeleteMapping("/{id}")
	public HttpStatus deleteSchedule(@PathVariable Long id) {
		return schedulerserv.deleteSchedule(id);
	}
//	Update
	@PatchMapping
	public Schedule updateSchedule(@RequestBody Schedule item) {
		return schedulerserv.updateSchedule(item);
	}
	
//	@GetMapping
//	public long countSchedule() {
//		return schedulerserv.countSchedule();
//	}
}

