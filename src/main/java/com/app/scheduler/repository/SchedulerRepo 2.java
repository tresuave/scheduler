package com.app.scheduler.repository;

import org.springframework.data.repository.CrudRepository;

import com.app.scheduler.model.Schedule;

public interface SchedulerRepo extends CrudRepository <Schedule, Long>{

}
