package com.cineminder;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by Rohan Raikar on 10/28/2017.
 */

public class SplashActivity extends AppCompatActivity {
    public static int SPLASH_TIMEOUT=3000;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);
        new Handler().postDelayed(new Runnable(){
            public void run(){
                Intent i = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(i);
                finish();
            }
        },SPLASH_TIMEOUT);
    
    }


}
