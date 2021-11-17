package com.ssafy.dto;

public class RankDto {
	String userId;
	int gameType;
	int score;
	
	public RankDto(String userId, int ganeType, int score) {
		super();
		this.userId = userId;
		this.gameType = ganeType;
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
	public void setGaneType(int ganeType) {
		this.gameType = ganeType;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
}
