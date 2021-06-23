package com.app.scheduler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.scheduler.model.Schedule;
import com.app.scheduler.repository.SchedulerRepo;

@Service
public class ScheduleServ {
@Autowired

SchedulerRepo schedulerrepo;

//get all of the scheduled activities
public Iterable <Schedule> getSchedule() {
	return schedulerrepo.findAll();
}

public Schedule findSchedule(Long id) {
	return schedulerrepo.findById(id).get();
}

public long countSchedule() {
	return schedulerrepo.count();
}

public Schedule createSchedule(Schedule item) {
	return schedulerrepo.save(item);
}

public HttpStatus deleteSchedule(Long id) {
	schedulerrepo.deleteById(id);
	return HttpStatus.OK;
}

public Schedule updateSchedule(Schedule item) {
	return schedulerrepo.save(item);
}

}
