package com.ssafy.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.dto.RankDto;
import com.ssafy.model.repo.RankRepo;

@Service
public class RankServiceImpl implements RankService {
	
	@Autowired
	private RankRepo repo;
	
	@Override
	public List<RankDto> selectRank(int gameType) {
		return repo.selectRank(gameType);
	}

}
