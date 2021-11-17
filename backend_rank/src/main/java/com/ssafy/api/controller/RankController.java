package com.ssafy.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.dto.RankDto;
import com.ssafy.model.service.RankService;


@RestController
@RequestMapping("/rank")
public class RankController {
	
	@Autowired
	private RankService service;
	
	@GetMapping
	public ResponseEntity<List<RankDto>> list(){
		List<RankDto> list = new ArrayList<>();
		for(int i=1;i<=4;i++) {
			List<RankDto> tmp = service.selectRank(i);
			for(int j=0;j<tmp.size();j++) {
				list.add(tmp.get(j));
			}
		}
		
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
