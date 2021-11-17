package com.ssafy.model.service;

import java.util.List;

import com.ssafy.dto.RankDto;

public interface RankService {
	List<RankDto> selectRank(int gameType);
}
