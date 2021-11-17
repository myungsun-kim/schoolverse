package com.ssafy.model.repo;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ssafy.dto.RankDto;

@Repository
public interface RankRepo {
	List<RankDto> selectRank(int gameType);
}
