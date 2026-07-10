package com.dao;

import com.entity.HuodonggenzongEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.HuodonggenzongVO;
import com.entity.view.HuodonggenzongView;


/**
 * 活动跟踪
 * 
 * @author 
 * @email 
 * @date 2025-01-25 16:55:24
 */
public interface HuodonggenzongDao extends BaseMapper<HuodonggenzongEntity> {
	
	List<HuodonggenzongVO> selectListVO(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);
	
	HuodonggenzongVO selectVO(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);
	
	List<HuodonggenzongView> selectListView(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);

	List<HuodonggenzongView> selectListView(Pagination page,@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);

	
	HuodonggenzongView selectView(@Param("ew") Wrapper<HuodonggenzongEntity> wrapper);
	

}
