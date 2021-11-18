package com.ssafy.dto;

public class RankDto {
	String userId;
	int gameType;
	int score;
	
	public RankDto(String userId, int gameType, int score) {
		super();
		this.userId = userId;
		this.gameType = gameType;
		this.score = score;
	}
	public RankDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public int getGaneType() {
		return gameType;
	}
	public void setGaneType(int gameType) {
		this.gameType = gameType;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
}
