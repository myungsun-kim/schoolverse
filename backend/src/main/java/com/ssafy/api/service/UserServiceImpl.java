package com.ssafy.api.service;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserModifyPutReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserRepositorySupport userRepositorySupport;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
		System.out.println(userRegisterInfo.getId());
		user.setUserId(userRegisterInfo.getId());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		user.setNickname(userRegisterInfo.getNickname());
//		user.setDepartment(userRegisterInfo.getDepartment());
//		user.setPosition(userRegisterInfo.getPosition());
		
		// jpaRepository의 save가 데이터가 새로 추가되면 insert를 실행
		return userRepository.save(user);
	}

	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회)
		if(userRepositorySupport.findUserByUserId(userId).isPresent()) {
			User user = userRepositorySupport.findUserByUserId(userId).get();
			return user;
		} else return null;
	}

	@Override
	public void modifyUser(String userId, UserRegisterPostReq userRegisterInfo) {
		if(userRepositorySupport.findUserByUserId(userId).isPresent()) {
			System.out.println("아이디가 존재");
			User user = userRepositorySupport.findUserByUserId(userId).get();
			userRepositorySupport.updateUserByUserId(userId, userRegisterInfo);
		}
		
	}
	
	@Override
	public boolean checkUserId(String userid) {
		// TODO Auto-generated method stub
		if(userRepositorySupport.findUserByUserId(userid).isPresent()) {
//			System.out.println("중복임!!!");
			return false;
		}
		return true;
	}
	
	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
////		생성한 방 지우기
////		생성한 방에 있는 모든 사람 강퇴시키기
////		현재 들어가 있는 방 지우기
//		List<Busking> blist = buskingRepository.findAll();
//		List<User_busking> ublist = userBuskingRepository.findAll();
//
//		for(Busking b : blist) {
//			if(b.getOwner_id() == id) {
//				for(User_busking ub : ublist) {
////					b가 주인으로 있는 방 모두 강퇴
//					if(ub.getB_id() == b.getId()) {
//						userBuskingRepository.delete(ub);
//					}
//				}
//				buskingRepository.delete(b);
//			}
//		}
//		
//		List<User_busking> ublist2 = userBuskingRepository.findAll();
//		for(User_busking ub : ublist2) {
//			if(ub.getU_id() == id) {
//				userBuskingRepository.deleteById(ub.getId());
//			}
//		}
//		
//
////		선호하는 장르 지우기
//		List<Fav_genre> flist = followRepository.findAll();
//		for(Fav_genre f : flist) {
//			if(f.getU_id() == id) {
//				followRepository.delete(f);
//			}
//		}
//		
//		
////		좋아요 목록 지우기
//		List<Liked> llist = likedRepository.findAll();
//		for(Liked l : llist) {
//			if(l.getU_id() == id) {
//				likedRepository.delete(l);
//			}
//		}
//		
//		/* 구현 안된 부분 구현하면 여기도 구현해야함 */
////		버스킹 히스토리 지우기
//		
////		강퇴 목록 지우기
//		
////		유저 리포트 지우기
		
		
		
		userRepository.deleteById(id);
	}
	
	@Override
	public User modifyUser(UserModifyPutReq userModifyInfo, String userId, Long id) {
		User user = new User();
		User getUser = getUserByUserId(userId);
//		System.out.println("회원정보 수정");
		user.setId(id);
		user.setUserId(userId);
		user.setPassword(getUser.getPassword());
		user.setNickname(userModifyInfo.getNickname());

		return userRepository.save(user);
	}
	
	@Override
	public User modifyPW(String PW, String userId, Long id) {
		User user = new User();
		User getUser = getUserByUserId(userId);
//		System.out.println("비밀번호 수정");
		user.setId(id);
		user.setUserId(userId);
		user.setPassword(passwordEncoder.encode(PW));
		user.setNickname(getUser.getNickname());
//		user.setGenre(getUser.getGenre());
		
		return userRepository.save(user);
	}
}
