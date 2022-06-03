balls = JSON.parse(File.read('db/migrate/bantamweight.json'))
balls.each do |record|
    Fighter.create!(record)
end

Promotion.create(name: "UFC")
Weightclass.create(name: "Bantamweight", weight: 135)

User.create(username: "nicky", password: "ye")
User.create(username: "r", password: "r")
User.create(username: "d", password: "d")

puts "done seedings broi"
# Fighter.create(
#     nickname: "Funk Master",
#     name: "Aljamain Sterling",
#     ranking: "Bantamweight Champion", 
#     fight_record: "19-3-0 (W-L-D)",
#     age: "29",
#     height: "66.00",
#     weight: "135.50",
#     octagon_debut: "Aug. 08, 2017",
#     reach: "69.00", 
#     leg_reach: "38.00", 
#     strAcc: "43%",
#     grpAcc: "54%",
#     slpm: "3.04", 
#     sabpm: "3.00",
#     tdAvg: "6.76",
#     subAvg: "0.37",
#     strDef: "65%", 
#     tdDef: "73%", 
#     knockdown_ratio: "0.37",
#     avgFt: "12:12",
#     ssbPS: "258 (70%)",
#     ssbPC: "45 (12%)",
#     ssbPG: "68 (18%)",
#     wbwKO: "5 (28%)",
#     wbwDec: "10 (56%)",
#     wbwSub: "3 (17%)",
#     ssbTH: "68%",
#     ssbTB: "17%",
#     ssbTL: "15%",
#     img: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-03/5b6e3467-269a-4dbe-8ed4-b13b540390b5%252FSIMON_RICKY_L_12-18.png?itok=FGrgo93n",
#     weightclass_id: 1, 
#     promotion_id: 1
# )