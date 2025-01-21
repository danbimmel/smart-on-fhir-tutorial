const JSONVAR = '{\
"units": {},\
"state": {\
"clientId": "6186517d-0143-4b5d-96f0-4f890ea3d8d5",\
"scope": "launch openid profile patient/Encounter.read patient/Patient.read patient/Observation.read online_access",\
"redirectUri": "https://danbimmel.github.io/smart-on-fhir-tutorial/example-smart-app/",\
"serverUrl": "https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d",\
"tokenResponse": {\
"need_patient_banner": true,\
"id_token": "eyJraWQiOiIyMDI1LTAxLTIxVDAxOjQwOjM2LjQ2OS5yc2EiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJwb3J0YWwiLCJhdWQiOiI2MTg2NTE3ZC0wMTQzLTRiNWQtOTZmMC00Zjg5MGVhM2Q4ZDUiLCJwcm9maWxlIjoiaHR0cHM6Ly9maGlyLWVoci1jb2RlLmNlcm5lci5jb20vcjQvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkL1ByYWN0aXRpb25lci8xMjc0MjA2OSIsImlzcyI6Imh0dHBzOi8vYXV0aG9yaXphdGlvbi5jZXJuZXIuY29tL3RlbmFudHMvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkL29pZGMvaWRzcHMvZWMyNDU4ZjItMWUyNC00MWM4LWI3MWItMGU3MDFhZjc1ODNkLyIsIm5hbWUiOiJQb3J0YWwsIFBvcnRhbCIsImV4cCI6MTczNzQ3MTU0NSwiaWF0IjoxNzM3NDcwOTQ1LCJmaGlyVXNlciI6Imh0dHBzOi8vZmhpci1laHItY29kZS5jZXJuZXIuY29tL3I0L2VjMjQ1OGYyLTFlMjQtNDFjOC1iNzFiLTBlNzAxYWY3NTgzZC9QcmFjdGl0aW9uZXIvMTI3NDIwNjkiLCJlbWFpbCI6InBvcnRhbC50ZXN0LnBvcnRhbEB0ZXN0Y2VybmVyLmRpcmVjdC5jb20ifQ.VnoVngAG8KDxGK6I5Pogb3rirM1ecHDg2dCb-_3mSaNk7Oy_CAp3AKKqemVQzO1c8U9fumUQ25qzpdj9szmPW00-uHPFoXM75I6NCv4Id0E1WKHIsbzx7mzfhK_XZYUpUj9U332lDZA46Yy6rfAoidS5yz7AhHFpc-qUn16OhJK1rOnznR4kDj86QX6aghFWlWj1iDsWrNmdVxUVkPbcf9aR5bjLlsk4OF5Cq4yuc5Y1NmXrZHTsEWveKeDFVxeG3JBcgvsSC0XNPechs6XL2sqMMUvj2sevVYQR3aIuqMT5f0Z2f6jD6SkRgtyCfU0_Q6pq3ahgLtt7sWoo8ljKdw",\
"smart_style_url": "https://smart.cerner.com/styles/smart-v1.json",\
"active_ttl": 34969,\
"encounter": "97953492",\
"token_type": "Bearer",\
"access_token": "eyJ6aXAiOiJERUYiLCJraWQiOiIyMDI1LTAxLTIwVDAyOjQwOjMwLjU2MS5vY3QiLCJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..gKV7ncSYAEQW44m8-UQhQQ.HpiBxOwhFiEXFu8VMspMF1Fv0qANDyB3SQv2nJgnR1jsfF7kndTePL3USdZzH_D8EakktPnSVtO0ixh-AHh4eTzXcT65lfKNAPkEwrN3DBo8qtB3Xar9AMpx0f-Xt_-OQylBN6DY932s_7stK1vHjCeWioqaI42PekSdTPg9RZfnsmAdU9pzUN6SxR1RH80f5MdS8oPG2UWOQINDsgFoJCrTcHQDowyzYbxSxFuBVjGkljJ20Xut7o3o6bF4JwIqLGgKql8cGm4X7EdYrb0UmUlrC8MjL-m-Vp_WmV2rfGtAdqF6yTJHvHGdw5g4FWWeG--K3ECj4KJYyijQPh7LLghASxkV7ahvLSnSg7TtW_jeZpoTHfJvFWe_20z1M4V6_DvgTnNkNL-sYXUjcMNV5VyWTWyFGVtlfZ7n9gbpCFeT5pgBeYNnSJ0Ww3ABZuOO80udUOJTWb5DOwOSPLapBn5KmhGKg046SIhmgQtHmND1OSF_xBfvfA19raVqr8ToqILKLZZ_oLmuU7v8XeinWZpKnhZYl9D7CM1dNebaLNnFtyKr60lGJEvq88pTMv8fTt6BNAN2igzlQ9JR3KYwMbb3pZRfUuFdKj7zJ2rP0RBTzrhrn7BPoF5E9Iq9XYOGacCErxV358NMHotVvSYyGul4RDrltqJqZgG6ncN3mk9Ts7YplC5ad2xGRE2MJDyKfzj9y0ocfTYyByY2FtqOmsU60qsPG-8y8YQO1z3m234QXR0WpQ6M_1Ya_FFL0-s8sWluwEUiXzqwN3bAJmLShwln5G9NGpv0Mqnlh7uvAR55bt04n15_whtahGJWMIk6svR38VccnoMVVJ3QvCimGkVrpmVsOgNnmoc3oLiSFLnlfUrEqBIWuF9cLcNh2GNEn2hlXJRvcSv5tE8rmI3v_feXLw0u808U3mEstgyDwF2LoYUdpyJtLtqLqY2yVQDrRAO8yxOD2KArrsUY8FIBd8Zl59NCMJ7ImdUASxIlpZ4TRPZtaC2EONYUToqNxvxWHOWNU0k4ScWbccSVRw91I8jA7VgOaxfsccmK95ifIlrKBC81bSSrWNJo6V7X5LCz6DDuDiXGUO9Zlp96Z-zu9vDyROoBYSitkj-YZ-YZg5WYO4walLBNGQF9OpN4D76WHRyedDM6eXXPd2GZSXgsZKa7P1L8ECwCqNe-xho1yu6tXcIK3mGXHM18tcyCqHcfAftGeBYRoGivx2b-ty9KMC_T3vlqFJkeO8-yhXET2yO_dadYBicHNKhsv-wcvAneoBqc48In_e9X4_Dk0tU1dogx7OskF6WjAuYRuq4h0Z2LcsEbhr7Isj2kX12tihKxBodAAlExBGH63OC0D9EDZ2pUAAXNA3qZJaRcfHvi5RDmA2bnaiW8i4HclqPvnbXoQqUKsh5K-rC3UyeDTWQUr2OoUlHA5xswK4dXhHD_OBCf4zfoBLN3Fq4pi0iTxIowbCsPe-4Xx5FY0AO6ZYpMB-VrFjxlNkkv9fUFZKyiy2PcX_qeDOLTT7kU2tAt0mkUiE5VXHW3uE8IhYZcdSMCH1cpHsEhA4Hj4iMWzQeIiYT1HD16UZeyKX1fg_ghnVTE.Z0GGSAWiylltMJ_5j0PNug",\
"refresh_token": "eyJpZCI6IjJjMmI1Njc4LWE2MzctNDY4Ny05OTA1LTliYjUyY2IyYzBiZiIsInNlY3JldCI6IjljMTlmNmZlLTVmOWUtNDA4Ni1hMThiLThjNmRkOWFiZTE4NyIsInZlciI6IjEuMSIsInR5cGUiOiJvbmxpbmVfYWNjZXNzIiwicHJvZmlsZSI6InNtYXJ0LXYxIiwicGVyc29uYSI6InByb3ZpZGVyIn0=",\
"patient": "12724069",\
"scope": "launch online_access openid patient/Encounter.read patient/Observation.read patient/Patient.read profile",\
"expires_in": 570,\
"user": "12742069",\
"tenant": "ec2458f2-1e24-41c8-b71b-0e701af7583d",\
"username": "portal"\
},\
"key": "V7FYfYxKjFfApMxU",\
"registrationUri": "",\
"authorizeUri": "https://authorization.cerner.com/tenants/ec2458f2-1e24-41c8-b71b-0e701af7583d/protocols/oauth2/profiles/smart-v1/personas/provider/authorize",\
"tokenUri": "https://authorization.cerner.com/tenants/ec2458f2-1e24-41c8-b71b-0e701af7583d/hosts/api.cernermillennium.com/protocols/oauth2/profiles/smart-v1/token",\
"codeChallengeMethods": [],\
"expiresAt": 1737471515\
},\
"environment": {\
"_url": "https://danbimmel.github.io/smart-on-fhir-tutorial/example-smart-app/?code=7bbf3ced-e3fe-4d23-bb4f-99d2aeab67b8&state=V7FYfYxKjFfApMxU",\
"_storage": {},\
"security": {},\
"options": {\
"replaceBrowserHistory": false,\
"fullSessionStorageSupport": true,\
"refreshTokenWithCredentials": "same-origin"\
}\
},\
"_refreshTask": null,\
"patient": {\
"id": "12724069"\
},\
"encounter": {\
"id": "97953492"\
},\
"user": {\
"fhirUser": "Practitioner/12742069",\
"id": "12742069",\
"resourceType": "Practitioner"\
}\
}';	 
