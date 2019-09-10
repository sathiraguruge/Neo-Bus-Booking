package com.neo.ticketingapp.service;

import com.neo.ticketingapp.requestModels.LoginRequest;
import com.neo.ticketingapp.responseModels.LoginResult;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface LoginService {

    @Headers("Content-Type: application/json")
    @POST("user/log")
    Call<LoginResult> logUser(@Body LoginRequest body);

}
