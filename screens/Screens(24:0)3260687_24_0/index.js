import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_2836} />
      <View style={styles.View_8_320}>
        <View style={styles.View_8_321} />
        <View style={styles.View_8_346}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_8_347}
          />
          <View style={styles.View_8_348}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_8_349}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_8_351}
            />
          </View>
          <View style={styles.View_8_350}>
            <Text style={styles.Text_8_350}>Notifications</Text>
          </View>
          <View style={styles.View_8_357}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_8_358}
            />
            <View style={styles.View_8_359}>
              <Text style={styles.Text_8_359}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_8_360}
            />
          </View>
          <View style={styles.View_8_450}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_8_451}
            />
            <View style={styles.View_8_452}>
              <Text style={styles.Text_8_452}>Add Review</Text>
            </View>
            <View style={styles.View_8_455}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_8_456}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_10_0}
          />
          <View style={styles.View_8_449}>
            <View style={styles.View_8_443}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_8_444}
              />
            </View>
            <View style={styles.View_8_448}>
              <Text style={styles.Text_8_448}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26cf/f297/d1e88583caeb819ef792d61741d410df"
          }}
          style={styles.ImageBackground_8_461}
        />
        <View style={styles.View_10_531}>
          <View style={styles.View_8_363}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_8_364}
            />
            <View style={styles.View_8_365}>
              <View style={styles.View_10_513}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2972/f72e/fed349ba389a6cfdb12fb4c6b94932df"
                  }}
                  style={styles.ImageBackground_10_514}
                />
              </View>
            </View>
            <View style={styles.View_10_532}>
              <View style={styles.View_8_366}>
                <Text style={styles.Text_8_366}>Search book</Text>
              </View>
              <View style={styles.View_10_516}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4f/0d31/472e0d69b2809b525edd230fc8feedd3"
                  }}
                  style={styles.ImageBackground_10_517}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_8_367}>
          <View style={styles.View_8_368}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacb/a7ab/16b0b8ec990b42f4f2f694942993cf90"
              }}
              style={styles.ImageBackground_8_369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a1/c75e/d93fc771271f380e7ee6e14fb1fc114e"
              }}
              style={styles.ImageBackground_8_384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c32/1b62/266b374da084ad3c31598f4edaeed3e7"
              }}
              style={styles.ImageBackground_8_388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dc6/0623/d1e356a4ec9157667507a58e087c48b0"
              }}
              style={styles.ImageBackground_8_392}
            />
          </View>
          <View style={styles.View_8_397}>
            <Text style={styles.Text_8_397}>5:40 PM</Text>
          </View>
        </View>
        <View style={styles.View_8_398}>
          <View style={styles.View_8_399}>
            <View style={styles.View_8_400}>
              <Text style={styles.Text_8_400}>
                You have no books as of yet. Just add your first book review to
                get started.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_8_419}>
          <View style={styles.View_8_420}>
            <View style={styles.View_8_421}>
              <Text style={styles.Text_8_421}>My Book List</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_8_434}>
          <View style={styles.View_8_435} />
          <View style={styles.View_8_436}>
            <View style={styles.View_8_437}>
              <Text style={styles.Text_8_437}>ADD BOOK REVIEW</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_8_439}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/790f/7ca9bcc48aa6721a90be0246a9722b35"
            }}
            style={styles.ImageBackground_8_440}
          />
        </View>
      </View>
      <View style={styles.View_10_1}>
        <View style={styles.View_10_2} />
        <View style={styles.View_10_27}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_10_28}
          />
          <View style={styles.View_10_29}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_10_30}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_10_31}
            />
          </View>
          <View style={styles.View_10_34}>
            <Text style={styles.Text_10_34}>Notifications</Text>
          </View>
          <View style={styles.View_10_35}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_10_36}
            />
            <View style={styles.View_10_37}>
              <Text style={styles.Text_10_37}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_10_38}
            />
          </View>
          <View style={styles.View_10_40}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_10_41}
            />
            <View style={styles.View_10_42}>
              <Text style={styles.Text_10_42}>Add Review</Text>
            </View>
            <View style={styles.View_10_43}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_10_44}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_10_49}
          />
          <View style={styles.View_10_50}>
            <View style={styles.View_10_51}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_10_52}
              />
            </View>
            <View style={styles.View_10_56}>
              <Text style={styles.Text_10_56}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_10_57}
        />
        <View style={styles.View_10_62}>
          <View style={styles.View_10_63}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacb/a7ab/16b0b8ec990b42f4f2f694942993cf90"
              }}
              style={styles.ImageBackground_10_64}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a1/c75e/d93fc771271f380e7ee6e14fb1fc114e"
              }}
              style={styles.ImageBackground_10_79}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c32/1b62/266b374da084ad3c31598f4edaeed3e7"
              }}
              style={styles.ImageBackground_10_83}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dc6/0623/d1e356a4ec9157667507a58e087c48b0"
              }}
              style={styles.ImageBackground_10_87}
            />
          </View>
          <View style={styles.View_10_92}>
            <Text style={styles.Text_10_92}>5:40 PM</Text>
          </View>
        </View>
        <View style={styles.View_10_96}>
          <View style={styles.View_10_97}>
            <View style={styles.View_10_98}>
              <Text style={styles.Text_10_98}>Add Book Review</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_99}>
          <View style={styles.View_10_100} />
          <View style={styles.View_10_101}>
            <View style={styles.View_10_102}>
              <Text style={styles.Text_10_102}>NEXT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_507}>
          <View style={styles.View_10_509}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_10_510}
            />
          </View>
        </View>
        <View style={styles.View_10_533}>
          <View style={styles.View_10_534}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_10_535}
            />
            <View style={styles.View_10_536}>
              <View style={styles.View_10_537}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2972/f72e/fed349ba389a6cfdb12fb4c6b94932df"
                  }}
                  style={styles.ImageBackground_10_538}
                />
              </View>
            </View>
            <View style={styles.View_10_540}>
              <View style={styles.View_10_541}>
                <Text style={styles.Text_10_541}>What’s the book’s name?</Text>
              </View>
              <View style={styles.View_10_542}>
                <View style={styles.View_10_545}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea3/a1a2/a2bbe52cc8adaecbd366570c6fe91e97"
                    }}
                    style={styles.ImageBackground_10_546}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_897}>
        <View style={styles.View_10_898} />
        <View style={styles.View_10_923}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_10_924}
          />
          <View style={styles.View_10_925}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_10_926}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_10_927}
            />
          </View>
          <View style={styles.View_10_930}>
            <Text style={styles.Text_10_930}>Notifications</Text>
          </View>
          <View style={styles.View_10_931}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_10_932}
            />
            <View style={styles.View_10_933}>
              <Text style={styles.Text_10_933}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_10_934}
            />
          </View>
          <View style={styles.View_10_936}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_10_937}
            />
            <View style={styles.View_10_938}>
              <Text style={styles.Text_10_938}>Add Review</Text>
            </View>
            <View style={styles.View_10_939}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_10_940}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_10_945}
          />
          <View style={styles.View_10_946}>
            <View style={styles.View_10_947}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_10_948}
              />
            </View>
            <View style={styles.View_10_952}>
              <Text style={styles.Text_10_952}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_10_953}
        />
        <View style={styles.View_10_955}>
          <View style={styles.View_10_956}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacb/a7ab/16b0b8ec990b42f4f2f694942993cf90"
              }}
              style={styles.ImageBackground_10_957}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a1/c75e/d93fc771271f380e7ee6e14fb1fc114e"
              }}
              style={styles.ImageBackground_10_972}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c32/1b62/266b374da084ad3c31598f4edaeed3e7"
              }}
              style={styles.ImageBackground_10_976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dc6/0623/d1e356a4ec9157667507a58e087c48b0"
              }}
              style={styles.ImageBackground_10_980}
            />
          </View>
          <View style={styles.View_10_985}>
            <Text style={styles.Text_10_985}>5:40 PM</Text>
          </View>
        </View>
        <View style={styles.View_10_986}>
          <View style={styles.View_10_987}>
            <View style={styles.View_10_988}>
              <Text style={styles.Text_10_988}>Add Book Review</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_989}>
          <View style={styles.View_10_990} />
          <View style={styles.View_10_991}>
            <View style={styles.View_10_992}>
              <Text style={styles.Text_10_992}>NEXT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_10_993}>
          <View style={styles.View_10_995}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_10_996}
            />
          </View>
        </View>
        <View style={styles.View_10_999}>
          <View style={styles.View_10_1000}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b9/b0d3/8cccceecdcab2712a4de707615b12369"
              }}
              style={styles.ImageBackground_10_1001}
            />
            <View style={styles.View_10_1002}>
              <View style={styles.View_10_1003}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2972/f72e/fed349ba389a6cfdb12fb4c6b94932df"
                  }}
                  style={styles.ImageBackground_10_1004}
                />
              </View>
            </View>
            <View style={styles.View_10_1006}>
              <View style={styles.View_10_1007}>
                <Text style={styles.Text_10_1007}>Stephen King Pet Sema|</Text>
              </View>
              <View style={styles.View_10_1008}>
                <View style={styles.View_10_1009}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea3/a1a2/a2bbe52cc8adaecbd366570c6fe91e97"
                    }}
                    style={styles.ImageBackground_10_1010}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdfa/5bd3/e2245da7c79c6697d2349c9243b4af42"
              }}
              style={styles.ImageBackground_10_1012}
            />
          </View>
        </View>
        <View style={styles.View_10_1013}>
          <Text style={styles.Text_10_1013}>Stephen King The Dark Tower</Text>
        </View>
        <View style={styles.View_10_1017}>
          <Text style={styles.Text_10_1017}>
            Stephen King Nightmares &amp; Dream...
          </Text>
        </View>
        <View style={styles.View_10_1023} />
        <View style={styles.View_10_1015}>
          <Text style={styles.Text_10_1015}>Stephen King Pet Sematary</Text>
        </View>
      </View>
      <View style={styles.View_13_2}>
        <View style={styles.View_13_3}>
          <View style={styles.View_13_128}>
            <Text style={styles.Text_13_128}>Pet Sematary</Text>
          </View>
          <View style={styles.View_13_129}>
            <Text style={styles.Text_13_129}>Stephen King</Text>
          </View>
          <View style={styles.View_13_150}>
            <Text style={styles.Text_13_150}>2,464 reviews</Text>
          </View>
        </View>
        <View style={styles.View_13_28}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_13_29}
          />
          <View style={styles.View_13_30}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_13_31}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_13_32}
            />
          </View>
          <View style={styles.View_13_35}>
            <Text style={styles.Text_13_35}>Notifications</Text>
          </View>
          <View style={styles.View_13_36}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_13_37}
            />
            <View style={styles.View_13_38}>
              <Text style={styles.Text_13_38}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_13_39}
            />
          </View>
          <View style={styles.View_13_41}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_13_42}
            />
            <View style={styles.View_13_43}>
              <Text style={styles.Text_13_43}>Add Review</Text>
            </View>
            <View style={styles.View_13_44}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_13_45}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_13_50}
          />
          <View style={styles.View_13_51}>
            <View style={styles.View_13_52}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_13_53}
              />
            </View>
            <View style={styles.View_13_57}>
              <Text style={styles.Text_13_57}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_13_58}
        />
        <View style={styles.View_13_60}>
          <View style={styles.View_13_61}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacb/a7ab/16b0b8ec990b42f4f2f694942993cf90"
              }}
              style={styles.ImageBackground_13_62}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a1/c75e/d93fc771271f380e7ee6e14fb1fc114e"
              }}
              style={styles.ImageBackground_13_77}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c32/1b62/266b374da084ad3c31598f4edaeed3e7"
              }}
              style={styles.ImageBackground_13_81}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dc6/0623/d1e356a4ec9157667507a58e087c48b0"
              }}
              style={styles.ImageBackground_13_85}
            />
          </View>
          <View style={styles.View_13_90}>
            <Text style={styles.Text_13_90}>5:40 PM</Text>
          </View>
        </View>
        <View style={styles.View_13_91}>
          <View style={styles.View_13_92}>
            <View style={styles.View_13_93}>
              <Text style={styles.Text_13_93}>Add Book Review</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_13_94}>
          <View style={styles.View_13_95} />
          <View style={styles.View_13_96}>
            <View style={styles.View_13_97}>
              <Text style={styles.Text_13_97}>NEXT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_13_98}>
          <View style={styles.View_13_100}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_13_101}
            />
          </View>
        </View>
        <View style={styles.View_13_127}>
          <View style={styles.View_13_126} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/225a/bd4a/1ba591af3f52d6ef90c48090a7ddbdf5"
            }}
            style={styles.ImageBackground_13_125}
          />
        </View>
        <View style={styles.View_13_133}>
          <Text style={styles.Text_13_133}>
            Sometimes dead is better....When the Creeds move into a beautiful
            old house in rural Maine, it all seems too good to be true:
            physician father, beautiful wife, charming little daughter, adorable
            infant son -- and now an idyllic home....
          </Text>
        </View>
        <View style={styles.View_13_134}>
          <Text style={styles.Text_13_134}>Full Synopsis</Text>
        </View>
        <View style={styles.View_13_135}>
          <View style={styles.View_13_136}>
            <Text style={styles.Text_13_136}>TAP TO ADD RATING</Text>
          </View>
          <View style={styles.View_13_137}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_13_138}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_13_140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_13_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_13_144}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dd/33de/d2e805fa2066caab75848f3bf797616c"
              }}
              style={styles.ImageBackground_13_146}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
          }}
          style={styles.ImageBackground_13_148}
        />
        <View style={styles.View_13_155}>
          <View style={styles.View_13_151}>
            <Text style={styles.Text_13_151}>4.68</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a26/5d59/0a73457d9c61dfd32838f979282ec2bb"
            }}
            style={styles.ImageBackground_13_152}
          />
        </View>
      </View>
      <View style={styles.View_13_156}>
        <View style={styles.View_13_157}>
          <View style={styles.View_13_158}>
            <Text style={styles.Text_13_158}>Pet Sematary</Text>
          </View>
          <View style={styles.View_13_159}>
            <Text style={styles.Text_13_159}>Stephen King</Text>
          </View>
          <View style={styles.View_13_160}>
            <Text style={styles.Text_13_160}>2,464 reviews</Text>
          </View>
        </View>
        <View style={styles.View_13_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_13_186}
          />
          <View style={styles.View_13_187}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_13_188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_13_189}
            />
          </View>
          <View style={styles.View_13_192}>
            <Text style={styles.Text_13_192}>Notifications</Text>
          </View>
          <View style={styles.View_13_193}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_13_194}
            />
            <View style={styles.View_13_195}>
              <Text style={styles.Text_13_195}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_13_196}
            />
          </View>
          <View style={styles.View_13_198}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_13_199}
            />
            <View style={styles.View_13_200}>
              <Text style={styles.Text_13_200}>Add Review</Text>
            </View>
            <View style={styles.View_13_201}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_13_202}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_13_207}
          />
          <View style={styles.View_13_208}>
            <View style={styles.View_13_209}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_13_210}
              />
            </View>
            <View style={styles.View_13_214}>
              <Text style={styles.Text_13_214}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_13_215}
        />
        <View style={styles.View_13_248}>
          <View style={styles.View_13_249}>
            <View style={styles.View_13_250}>
              <Text style={styles.Text_13_250}>Add Book Review</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_13_251}>
          <View style={styles.View_13_252} />
          <View style={styles.View_13_253}>
            <View style={styles.View_13_254}>
              <Text style={styles.Text_13_254}>SUBMIT REVIEW</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_13_255}>
          <View style={styles.View_13_257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_13_258}
            />
          </View>
        </View>
        <View style={styles.View_13_262}>
          <View style={styles.View_13_263} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/225a/bd4a/1ba591af3f52d6ef90c48090a7ddbdf5"
            }}
            style={styles.ImageBackground_13_264}
          />
        </View>
        <View style={styles.View_13_281}>
          <View style={styles.View_13_282}>
            <Text style={styles.Text_13_282}>4.68</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a26/5d59/0a73457d9c61dfd32838f979282ec2bb"
            }}
            style={styles.ImageBackground_13_283}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f320/7774/9fa6dec8739275874ef38b6f20ccfe0c"
          }}
          style={styles.ImageBackground_13_285}
        />
        <View style={styles.View_13_286}>
          <Text style={styles.Text_13_286}>
            WHAT DID YOU THINK OF THIS BOOK?
          </Text>
        </View>
        <View style={styles.View_13_287}>
          <Text style={styles.Text_13_287}>
            I was a big Stephen King fan back in the 7th grade, mainly because
            it was my first experience with books written for adults. After a
            while though, I stared reading other more obscure novels and I
            stopped reading King&#39;s works. Pet Sematary really caught my
            interest though, and I found it to be much better than many of his
            other books because of the way it deals so muc|
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/694a/1aec/6b66e6053f6f7287a835d465394f7f3d"
          }}
          style={styles.ImageBackground_24_2}
        />
      </View>
      <View style={styles.View_18_231}>
        <View style={styles.View_18_260}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_18_261}
          />
          <View style={styles.View_18_262}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_18_263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_18_264}
            />
          </View>
          <View style={styles.View_18_267}>
            <Text style={styles.Text_18_267}>Notifications</Text>
          </View>
          <View style={styles.View_18_268}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_18_269}
            />
            <View style={styles.View_18_270}>
              <Text style={styles.Text_18_270}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_18_271}
            />
          </View>
          <View style={styles.View_18_273}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_18_274}
            />
            <View style={styles.View_18_275}>
              <Text style={styles.Text_18_275}>Add Review</Text>
            </View>
            <View style={styles.View_18_276}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_18_277}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_18_282}
          />
          <View style={styles.View_18_283}>
            <View style={styles.View_18_284}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_18_285}
              />
            </View>
            <View style={styles.View_18_289}>
              <Text style={styles.Text_18_289}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_18_290}
        />
        <View style={styles.View_18_323}>
          <View style={styles.View_18_324}>
            <View style={styles.View_18_325}>
              <Text style={styles.Text_18_325}>My Friends</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_18_326}>
          <View style={styles.View_18_327} />
          <View style={styles.View_18_328}>
            <View style={styles.View_18_329}>
              <Text style={styles.Text_18_329}>ADD FRIENDS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_18_330}>
          <View style={styles.View_18_332}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_18_333}
            />
          </View>
        </View>
        <View style={styles.View_18_347}>
          <View style={styles.View_18_348}>
            <View style={styles.View_18_349}>
              <Text style={styles.Text_18_349}>
                You have friends as of yet. Just add your first friends to get
                started.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_18_350}>
          <View style={styles.View_19_2}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa68/68db/6f111149bfb183eb6835abde70e91a24"
              }}
              style={styles.ImageBackground_19_3}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_19_135}>
        <View style={styles.View_19_259} />
        <View style={styles.View_20_1}>
          <View style={styles.View_20_42}>
            <View style={styles.View_20_2} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa8f/48ba/1425eea6455842ba6835d0671a25fbbb"
              }}
              style={styles.ImageBackground_20_41}
            />
          </View>
          <View style={styles.View_20_3}>
            <Text style={styles.Text_20_3}>Anna</Text>
          </View>
          <View style={styles.View_20_4}>
            <Text style={styles.Text_20_4}>07:25AM</Text>
          </View>
          <View style={styles.View_20_5}>
            <Text style={styles.Text_20_5}>
              Quisque dictum varius arcu, eu scelerisque arcu consectetur ut.
              Duis dapibus nulla vitae ipsum mattis porttitor eget suscipit
              tellus.
            </Text>
          </View>
        </View>
        <View style={styles.View_20_6}>
          <View style={styles.View_20_7} />
          <View style={styles.View_20_8} />
        </View>
        <View style={styles.View_19_160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_19_161}
          />
          <View style={styles.View_19_162}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_19_163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_19_164}
            />
          </View>
          <View style={styles.View_19_167}>
            <Text style={styles.Text_19_167}>Notifications</Text>
          </View>
          <View style={styles.View_19_168}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_19_169}
            />
            <View style={styles.View_19_170}>
              <Text style={styles.Text_19_170}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_19_171}
            />
          </View>
          <View style={styles.View_19_173}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_19_174}
            />
            <View style={styles.View_19_175}>
              <Text style={styles.Text_19_175}>Add Review</Text>
            </View>
            <View style={styles.View_19_176}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_19_177}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_19_182}
          />
          <View style={styles.View_19_183}>
            <View style={styles.View_19_184}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_19_185}
              />
            </View>
            <View style={styles.View_19_189}>
              <Text style={styles.Text_19_189}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_19_190}
        />
        <View style={styles.View_19_223}>
          <View style={styles.View_19_224}>
            <View style={styles.View_19_225}>
              <Text style={styles.Text_19_225}>My Friends</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_19_230}>
          <View style={styles.View_19_232}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_19_233}
            />
          </View>
        </View>
        <View style={styles.View_19_244}>
          <Text style={styles.Text_19_244}>RECENTLY ADDED</Text>
        </View>
        <View style={styles.View_19_245}>
          <View style={styles.View_20_18}>
            <View style={styles.View_19_246} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485f/6bf8/ad138e982446745a89aff7b547e6572e"
              }}
              style={styles.ImageBackground_20_13}
            />
          </View>
          <View style={styles.View_20_21}>
            <View style={styles.View_19_247} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/509a/6571/93b35a51c8cb807e5b58e1dcbb2af454"
              }}
              style={styles.ImageBackground_20_20}
            />
          </View>
          <View style={styles.View_20_24}>
            <View style={styles.View_19_248} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/558b/c2fe/162c188355448705e43efbccfd739698"
              }}
              style={styles.ImageBackground_20_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a15/c8df/f38ae07a3fa979c9065859bf817f734b"
              }}
              style={styles.ImageBackground_20_35}
            />
          </View>
          <View style={styles.View_20_27}>
            <View style={styles.View_19_249} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0626/9fed/6d56d810a03bfb592690f9725699c19f"
              }}
              style={styles.ImageBackground_20_26}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5cb/1bf6/e96af561778800074a024b6c9f6825ee"
              }}
              style={styles.ImageBackground_20_33}
            />
          </View>
          <View style={styles.View_20_31}>
            <View style={styles.View_19_250} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb9/5820/f25a453171e830096084da57be48cda5"
              }}
              style={styles.ImageBackground_20_29}
            />
          </View>
          <View style={styles.View_19_251} />
        </View>
        <View style={styles.View_19_253}>
          <Text style={styles.Text_19_253}>CHAT</Text>
        </View>
        <View style={styles.View_19_254}>
          <View style={styles.View_20_40}>
            <View style={styles.View_19_255} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49bb/51e1/0d93ae07fda484c39798f6fc545f3705"
              }}
              style={styles.ImageBackground_20_39}
            />
          </View>
          <View style={styles.View_19_256}>
            <Text style={styles.Text_19_256}>Rachel</Text>
          </View>
          <View style={styles.View_19_257}>
            <Text style={styles.Text_19_257}>13:28PM</Text>
          </View>
          <View style={styles.View_19_258}>
            <Text style={styles.Text_19_258}>
              Quisque dictum varius arcu, eu scelerisque arcu consectetur ut.
              Duis dapibus nulla vitae ipsum mattis porttitor eget suscipit
              tellus.
            </Text>
          </View>
        </View>
        <View style={styles.View_19_261}>
          <View style={styles.View_20_38}>
            <View style={styles.View_19_262} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3528/98d7/703dc81750684ec9f243610f5b7d11aa"
              }}
              style={styles.ImageBackground_20_37}
            />
          </View>
          <View style={styles.View_19_263}>
            <Text style={styles.Text_19_263}>Tom</Text>
          </View>
          <View style={styles.View_19_264}>
            <Text style={styles.Text_19_264}>11:06AM</Text>
          </View>
          <View style={styles.View_19_265}>
            <Text style={styles.Text_19_265}>
              Quisque dictum varius arcu, eu scelerisque arcu consectetur ut.
              Duis dapibus nulla vitae ipsum mattis porttitor eget suscipit
              tellus.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
          }}
          style={styles.ImageBackground_19_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
          }}
          style={styles.ImageBackground_20_0}
        />
      </View>
      <View style={styles.View_22_778}>
        <View style={styles.View_22_787}>
          <View style={styles.View_22_788} />
          <View style={styles.View_22_789} />
        </View>
        <View style={styles.View_22_817}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_22_818}
          />
          <View style={styles.View_22_819}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_22_820}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_22_821}
            />
          </View>
          <View style={styles.View_22_824}>
            <Text style={styles.Text_22_824}>Notifications</Text>
          </View>
          <View style={styles.View_22_825}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_22_826}
            />
            <View style={styles.View_22_827}>
              <Text style={styles.Text_22_827}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_22_828}
            />
          </View>
          <View style={styles.View_22_830}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_22_831}
            />
            <View style={styles.View_22_832}>
              <Text style={styles.Text_22_832}>Add Review</Text>
            </View>
            <View style={styles.View_22_833}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_22_834}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_22_839}
          />
          <View style={styles.View_22_840}>
            <View style={styles.View_22_841}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_22_842}
              />
            </View>
            <View style={styles.View_22_846}>
              <Text style={styles.Text_22_846}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_22_847}
        />
        <View style={styles.View_22_880}>
          <View style={styles.View_22_881}>
            <View style={styles.View_22_882}>
              <Text style={styles.Text_22_882}>Add Friends</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_22_883}>
          <View style={styles.View_22_885}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_22_886}
            />
          </View>
        </View>
        <View style={styles.View_22_890}>
          <Text style={styles.Text_22_890}>
            HOW DO YOU WANT TO ADD FRIENDS?
          </Text>
        </View>
        <View style={styles.View_23_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_4}
          />
          <View style={styles.View_23_5}>
            <Text style={styles.Text_23_5}>Search by username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_6}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_10}
          />
          <View style={styles.View_23_12}>
            <Text style={styles.Text_23_12}>Search Facebook</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_13}
          />
          <View style={styles.View_23_14}>
            <Text style={styles.Text_23_14}>Search contacts</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_17}
          />
          <View style={styles.View_23_18}>
            <Text style={styles.Text_23_18}>Send email invitation</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_23_31}>
        <View style={styles.View_23_32}>
          <View style={styles.View_23_33} />
          <View style={styles.View_23_34} />
        </View>
        <View style={styles.View_23_62}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_23_63}
          />
          <View style={styles.View_23_64}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_23_65}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_23_66}
            />
          </View>
          <View style={styles.View_23_69}>
            <Text style={styles.Text_23_69}>Notifications</Text>
          </View>
          <View style={styles.View_23_70}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_23_71}
            />
            <View style={styles.View_23_72}>
              <Text style={styles.Text_23_72}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_23_73}
            />
          </View>
          <View style={styles.View_23_75}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_23_76}
            />
            <View style={styles.View_23_77}>
              <Text style={styles.Text_23_77}>Add Review</Text>
            </View>
            <View style={styles.View_23_78}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_23_79}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_23_84}
          />
          <View style={styles.View_23_85}>
            <View style={styles.View_23_86}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_23_87}
              />
            </View>
            <View style={styles.View_23_91}>
              <Text style={styles.Text_23_91}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_23_92}
        />
        <View style={styles.View_23_125}>
          <View style={styles.View_23_126}>
            <View style={styles.View_23_127}>
              <Text style={styles.Text_23_127}>Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_128}>
          <View style={styles.View_23_130}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_23_131}
            />
          </View>
        </View>
        <View style={styles.View_23_157}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_159}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_160}
          />
          <View style={styles.View_23_161}>
            <Text style={styles.Text_23_161}>Account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_162}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_164}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_166}
          />
          <View style={styles.View_23_168}>
            <Text style={styles.Text_23_168}>Notifications</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_169}
          />
          <View style={styles.View_23_170}>
            <Text style={styles.Text_23_170}>Privacy</Text>
          </View>
          <View style={styles.View_23_171}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a123/23da/50af03e20d600b502f3aa65a47009046"
              }}
              style={styles.ImageBackground_23_172}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_178}
          />
          <View style={styles.View_23_179}>
            <Text style={styles.Text_23_179}>Help Center</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a5f/3587/940e1852246a658174b97da51d7ee5fd"
            }}
            style={styles.ImageBackground_23_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facb/8a88/4fd7cd0e36253427674ee3850b81d99a"
            }}
            style={styles.ImageBackground_23_182}
          />
          <View style={styles.View_23_183}>
            <Text style={styles.Text_23_183}>General</Text>
          </View>
          <View style={styles.View_23_184}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c594/05a7/66f1ddca8065821fdd6591665ec6da92"
              }}
              style={styles.ImageBackground_23_185}
            />
          </View>
          <View style={styles.View_23_189}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0026/f798/b35899cad6f3430ee5b653784e3bfc6b"
              }}
              style={styles.ImageBackground_23_190}
            />
          </View>
          <View style={styles.View_23_193}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5157/aa1b/a9b08946ad8448183d640a19ee1a7ef8"
              }}
              style={styles.ImageBackground_23_194}
            />
          </View>
          <View style={styles.View_23_201}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd8c/b4e4/50b933b03f4a0a5cd4d2581865e93213"
              }}
              style={styles.ImageBackground_23_202}
            />
          </View>
          <View style={styles.View_23_156}>
            <Text style={styles.Text_23_156}>
              HOW DO YOU WANT TO ADD FRIENDS?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_23_206}>
        <View style={styles.View_23_207}>
          <View style={styles.View_23_208} />
          <View style={styles.View_23_209} />
        </View>
        <View style={styles.View_23_237}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_23_238}
          />
          <View style={styles.View_23_239}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_23_240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_23_241}
            />
          </View>
          <View style={styles.View_23_244}>
            <Text style={styles.Text_23_244}>Notifications</Text>
          </View>
          <View style={styles.View_23_245}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_23_246}
            />
            <View style={styles.View_23_247}>
              <Text style={styles.Text_23_247}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_23_248}
            />
          </View>
          <View style={styles.View_23_250}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_23_251}
            />
            <View style={styles.View_23_252}>
              <Text style={styles.Text_23_252}>Add Review</Text>
            </View>
            <View style={styles.View_23_253}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_23_254}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_23_259}
          />
          <View style={styles.View_23_260}>
            <View style={styles.View_23_261}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_23_262}
              />
            </View>
            <View style={styles.View_23_266}>
              <Text style={styles.Text_23_266}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_23_267}
        />
        <View style={styles.View_23_300}>
          <View style={styles.View_23_301}>
            <View style={styles.View_23_302}>
              <Text style={styles.Text_23_302}>Account Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_303}>
          <View style={styles.View_23_305}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_23_306}
            />
          </View>
        </View>
        <View style={styles.View_23_362}>
          <View style={styles.View_23_363}>
            <Text style={styles.Text_23_363}>NAME</Text>
          </View>
          <View style={styles.View_23_364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_23_365}
            />
            <View style={styles.View_23_366} />
            <View style={styles.View_23_367}>
              <Text style={styles.Text_23_367}>Madalin Duca</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_368}>
          <View style={styles.View_23_369}>
            <Text style={styles.Text_23_369}>USERNAME</Text>
          </View>
          <View style={styles.View_23_370}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_23_371}
            />
            <View style={styles.View_23_372} />
            <View style={styles.View_23_373}>
              <Text style={styles.Text_23_373}>wizardmotherfucker</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_374}>
          <View style={styles.View_23_375}>
            <Text style={styles.Text_23_375}>EMAIL</Text>
          </View>
          <View style={styles.View_23_376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_23_377}
            />
            <View style={styles.View_23_378} />
            <View style={styles.View_23_379}>
              <Text style={styles.Text_23_379}>ducawizard@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_380}>
          <View style={styles.View_23_381}>
            <Text style={styles.Text_23_381}>COUNTRY</Text>
          </View>
          <View style={styles.View_23_382}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/757e/e57c/517c0d52338575d10cbe4698c0fc7a9d"
              }}
              style={styles.ImageBackground_23_383}
            />
            <View style={styles.View_23_384} />
            <View style={styles.View_23_385}>
              <Text style={styles.Text_23_385}>Romania</Text>
            </View>
          </View>
          <View style={styles.View_23_386}>
            <Text style={styles.Text_23_386}>AGE</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/757e/e57c/517c0d52338575d10cbe4698c0fc7a9d"
            }}
            style={styles.ImageBackground_23_387}
          />
          <View style={styles.View_23_388}>
            <Text style={styles.Text_23_388}>27</Text>
          </View>
        </View>
        <View style={styles.View_23_389}>
          <View style={styles.View_23_390} />
          <View style={styles.View_23_391}>
            <View style={styles.View_23_392}>
              <Text style={styles.Text_23_392}>SAVE SETTINGS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_23_393}>
          <View style={styles.View_23_394} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485f/6bf8/ad138e982446745a89aff7b547e6572e"
            }}
            style={styles.ImageBackground_23_395}
          />
        </View>
        <View style={styles.View_23_396}>
          <Text style={styles.Text_23_396}>PROFILE PICTURE</Text>
        </View>
      </View>
      <View style={styles.View_22_131}>
        <View style={styles.View_22_132} />
        <View style={styles.View_22_284}>
          <View style={styles.View_22_285}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6453/25e8/f0177bf04a66186c2c906a9f5d2152e3"
              }}
              style={styles.ImageBackground_22_286}
            />
            <View style={styles.View_22_287}>
              <Text style={styles.Text_22_287}>You</Text>
            </View>
            <View style={styles.View_22_288}>
              <Text style={styles.Text_22_288}>Haha, yes!</Text>
            </View>
            <View style={styles.View_22_289}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a204/8bc0/aad5d0f38c6c8a7e79a80b4d337daeaa"
                }}
                style={styles.ImageBackground_22_290}
              />
              <View style={styles.View_22_291}>
                <Text style={styles.Text_22_291}>Rachel</Text>
              </View>
              <View style={styles.View_22_292}>
                <Text style={styles.Text_22_292}>LOL &lt;3 Agree.</Text>
              </View>
            </View>
            <View style={styles.View_22_293}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f390/33a1/7ff92a39111f96e709a832fe37518d48"
                }}
                style={styles.ImageBackground_22_294}
              />
              <View style={styles.View_22_295}>
                <Text style={styles.Text_22_295}>You</Text>
              </View>
              <View style={styles.View_22_296}>
                <Text style={styles.Text_22_296}>
                  Quisque dictum varius arcu.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_22_297}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73d/53f7/d62f7b6cc2f65428650551528a12ab71"
              }}
              style={styles.ImageBackground_22_298}
            />
            <View style={styles.View_22_299}>
              <Text style={styles.Text_22_299}>You</Text>
            </View>
            <View style={styles.View_22_300}>
              <Text style={styles.Text_22_300}>
                Quisque dictum varius arcu.
              </Text>
            </View>
            <View style={styles.View_22_301}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42cd/a24b/5cfe1fc2a43476ea8bb3daa0719710b6"
                }}
                style={styles.ImageBackground_22_302}
              />
              <View style={styles.View_22_303}>
                <Text style={styles.Text_22_303}>Rachel</Text>
              </View>
              <View style={styles.View_22_304}>
                <Text style={styles.Text_22_304}>
                  Yeah, I think so too. I also loved his other books.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_22_306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6453/25e8/f0177bf04a66186c2c906a9f5d2152e3"
              }}
              style={styles.ImageBackground_22_307}
            />
            <View style={styles.View_22_308}>
              <Text style={styles.Text_22_308}>You</Text>
            </View>
            <View style={styles.View_22_309}>
              <Text style={styles.Text_22_309}>Haha, yes!</Text>
            </View>
            <View style={styles.View_22_310}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a204/8bc0/aad5d0f38c6c8a7e79a80b4d337daeaa"
                }}
                style={styles.ImageBackground_22_311}
              />
              <View style={styles.View_22_312}>
                <Text style={styles.Text_22_312}>Rachel</Text>
              </View>
              <View style={styles.View_22_313}>
                <Text style={styles.Text_22_313}>LOL &lt;3 Agree.</Text>
              </View>
            </View>
            <View style={styles.View_22_314}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73d/53f7/d62f7b6cc2f65428650551528a12ab71"
                }}
                style={styles.ImageBackground_22_315}
              />
              <View style={styles.View_22_316}>
                <Text style={styles.Text_22_316}>You</Text>
              </View>
              <View style={styles.View_22_317}>
                <Text style={styles.Text_22_317}>
                  Quisque dictum varius arcu.
                </Text>
              </View>
              <View style={styles.View_22_318}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c87/99ae/0266538aeadff02f94095995a553b6f0"
                  }}
                  style={styles.ImageBackground_22_319}
                />
                <View style={styles.View_22_320}>
                  <Text style={styles.Text_22_320}>Rachel</Text>
                </View>
                <View style={styles.View_22_321}>
                  <Text style={styles.Text_22_321}>
                    Yeah, I think so too. I also loved his other books.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_22_143}>
          <View style={styles.View_22_144} />
          <View style={styles.View_22_145} />
        </View>
        <View style={styles.View_22_170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_22_171}
          />
          <View style={styles.View_22_172}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_22_173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_22_174}
            />
          </View>
          <View style={styles.View_22_177}>
            <Text style={styles.Text_22_177}>Notifications</Text>
          </View>
          <View style={styles.View_22_178}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_22_179}
            />
            <View style={styles.View_22_180}>
              <Text style={styles.Text_22_180}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_22_181}
            />
          </View>
          <View style={styles.View_22_183}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_22_184}
            />
            <View style={styles.View_22_185}>
              <Text style={styles.Text_22_185}>Add Review</Text>
            </View>
            <View style={styles.View_22_186}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_22_187}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_22_192}
          />
          <View style={styles.View_22_193}>
            <View style={styles.View_22_194}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_22_195}
              />
            </View>
            <View style={styles.View_22_199}>
              <Text style={styles.Text_22_199}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8a/b540/49085a26c2dab3bd59073cd6f5b15877"
          }}
          style={styles.ImageBackground_22_200}
        />
        <View style={styles.View_22_233}>
          <View style={styles.View_22_234}>
            <View style={styles.View_22_235}>
              <Text style={styles.Text_22_235}>Rachel</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_22_236}>
          <View style={styles.View_22_238}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ad/b25f/c31d5d7e6c79a4b5cd66e081ac561a17"
              }}
              style={styles.ImageBackground_22_239}
            />
          </View>
        </View>
        <View style={styles.View_22_280}>
          <View style={styles.View_22_281} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e8e/4360/edd33f7045b3e00945969c2f9dfc2c84"
            }}
            style={styles.ImageBackground_22_282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d305/3328/c90af33b87fc96ad057ce1f67fa88a19"
            }}
            style={styles.ImageBackground_22_283}
          />
        </View>
      </View>
      <View style={styles.View_13_288}>
        <View style={styles.View_13_289} />
        <View style={styles.View_13_342}>
          <View style={styles.View_13_343}>
            <View style={styles.View_13_344}>
              <Text style={styles.Text_13_344}>
                YOU MAY ALSO BE INTERESED IN:
              </Text>
            </View>
          </View>
          <View style={styles.View_13_411}>
            <View style={styles.View_13_420}>
              <View style={styles.View_13_418} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd3/3cf2/53d5e80fc6ea036e99a39eacd6eae287"
                }}
                style={styles.ImageBackground_13_417}
              />
            </View>
            <View style={styles.View_13_346}>
              <Text style={styles.Text_13_346}>Scar Tissue</Text>
            </View>
            <View style={styles.View_13_347}>
              <Text style={styles.Text_13_347}>Anthony Kiedis</Text>
            </View>
          </View>
          <View style={styles.View_13_421}>
            <View style={styles.View_13_423}>
              <View style={styles.View_13_424} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a53d/73e4/f8a045695389f5ca48608e14c5e169f9"
                }}
                style={styles.ImageBackground_13_436}
              />
            </View>
            <View style={styles.View_13_426}>
              <Text style={styles.Text_13_426}>Eat Awesome</Text>
            </View>
            <View style={styles.View_13_427}>
              <Text style={styles.Text_13_427}>Paul Jarvis</Text>
            </View>
          </View>
          <View style={styles.View_13_428}>
            <View style={styles.View_13_430}>
              <View style={styles.View_13_431} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cd3/3cf2/53d5e80fc6ea036e99a39eacd6eae287"
                }}
                style={styles.ImageBackground_13_432}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b38/9a3d/f9db98f6833290c58f2456601fa2c4dd"
                }}
                style={styles.ImageBackground_13_442}
              />
            </View>
            <View style={styles.View_13_433}>
              <Text style={styles.Text_13_433}>The Wastelands</Text>
            </View>
            <View style={styles.View_13_434}>
              <Text style={styles.Text_13_434}>Stephen King</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_13_354}>
          <View style={styles.View_15_2}>
            <View style={styles.View_15_3} />
            <View style={styles.View_15_4}>
              <View style={styles.View_15_5}>
                <Text style={styles.Text_15_5}>ADD FRIENDS</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_13_355}>
          <View style={styles.View_13_375}>
            <Text style={styles.Text_13_375}>Thank you!</Text>
          </View>
        </View>
        <View style={styles.View_14_8}>
          <View style={styles.View_13_356}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75ab/0b4c/46a61da858c0ab26f2c2d6c8dd55e490"
              }}
              style={styles.ImageBackground_13_371}
            />
            <View style={styles.View_13_372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8a/c3c0/fd2f6396c1e22c1277ff93f621c7142a"
                }}
                style={styles.ImageBackground_13_373}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_13_380}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_13_381}
          />
          <View style={styles.View_13_382}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_13_383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_13_384}
            />
          </View>
          <View style={styles.View_13_387}>
            <Text style={styles.Text_13_387}>Notifications</Text>
          </View>
          <View style={styles.View_13_388}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_13_389}
            />
            <View style={styles.View_13_390}>
              <Text style={styles.Text_13_390}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_13_391}
            />
          </View>
          <View style={styles.View_13_393}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_13_394}
            />
            <View style={styles.View_13_395}>
              <Text style={styles.Text_13_395}>Add Review</Text>
            </View>
            <View style={styles.View_13_396}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_13_397}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_13_402}
          />
          <View style={styles.View_13_403}>
            <View style={styles.View_13_404}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_13_405}
              />
            </View>
            <View style={styles.View_13_409}>
              <Text style={styles.Text_13_409}>My Books</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_14_9}>
          <Text style={styles.Text_14_9}>
            You have submitted your first book review. Now it’s time to make
            some friends.
          </Text>
        </View>
      </View>
      <View style={styles.View_15_670}>
        <View style={styles.View_15_671} />
        <View style={styles.View_18_82}>
          <View style={styles.View_18_83} />
          <View style={styles.View_18_84}>
            <View style={styles.View_18_85} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c1/312d/cabfa90208ed5cfa47e69b66b807cc43"
              }}
              style={styles.ImageBackground_18_86}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/805e/8287/e503adee42ecfb159fbcf32b77829c50"
              }}
              style={styles.ImageBackground_18_106}
            />
          </View>
          <View style={styles.View_18_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_88}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_90}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_92}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_94}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dd/33de/d2e805fa2066caab75848f3bf797616c"
              }}
              style={styles.ImageBackground_18_96}
            />
          </View>
          <View style={styles.View_18_98}>
            <Text style={styles.Text_18_98}>Papillon</Text>
          </View>
          <View style={styles.View_18_99}>
            <Text style={styles.Text_18_99}>Henri Charriere</Text>
          </View>
        </View>
        <View style={styles.View_18_46}>
          <View style={styles.View_18_47} />
          <View style={styles.View_18_48}>
            <View style={styles.View_18_49} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c1/312d/cabfa90208ed5cfa47e69b66b807cc43"
              }}
              style={styles.ImageBackground_18_50}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a0/b07a/09bb562911a68bf0a9c0bb4682dd0e56"
              }}
              style={styles.ImageBackground_18_104}
            />
          </View>
          <View style={styles.View_18_51}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_52}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_54}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_56}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_58}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dd/33de/d2e805fa2066caab75848f3bf797616c"
              }}
              style={styles.ImageBackground_18_60}
            />
          </View>
          <View style={styles.View_18_62}>
            <Text style={styles.Text_18_62}>
              The Dark Tower: The Gunslinger
            </Text>
          </View>
          <View style={styles.View_18_63}>
            <Text style={styles.Text_18_63}>Stephen King</Text>
          </View>
        </View>
        <View style={styles.View_18_0}>
          <View style={styles.View_18_1} />
          <View style={styles.View_18_2} />
        </View>
        <View style={styles.View_15_696}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/abed/f347c19a81d3f8e730c1483af5507e11"
            }}
            style={styles.ImageBackground_15_697}
          />
          <View style={styles.View_15_698}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/36d9/b70edecba2a366c6ac6ae6c5014f9249"
              }}
              style={styles.ImageBackground_15_699}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f9/f22a/98b4bbde3f76b774a274b7a5c0842f62"
              }}
              style={styles.ImageBackground_15_700}
            />
          </View>
          <View style={styles.View_15_703}>
            <Text style={styles.Text_15_703}>Notifications</Text>
          </View>
          <View style={styles.View_15_704}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4125/8c45/380f5ce1029848537c04ae550efb4311"
              }}
              style={styles.ImageBackground_15_705}
            />
            <View style={styles.View_15_706}>
              <Text style={styles.Text_15_706}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e768/8e90/df1c2ed3a69dbe4d913726dd18d07260"
              }}
              style={styles.ImageBackground_15_707}
            />
          </View>
          <View style={styles.View_15_709}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f879/56e6/eda93878f683180679c28c97c25fca40"
              }}
              style={styles.ImageBackground_15_710}
            />
            <View style={styles.View_15_711}>
              <Text style={styles.Text_15_711}>Add Review</Text>
            </View>
            <View style={styles.View_15_712}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/728b/f1a6/c4bfafb91ada7377fb8880940ce67ef3"
                }}
                style={styles.ImageBackground_15_713}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6f/0b46/65d027414a0c4a2ae24aab4dd676040b"
            }}
            style={styles.ImageBackground_15_718}
          />
          <View style={styles.View_15_719}>
            <View style={styles.View_15_720}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b4d/56a0/2300c5b785cd3e03fa3aa63f91205d73"
                }}
                style={styles.ImageBackground_15_721}
              />
            </View>
            <View style={styles.View_15_725}>
              <Text style={styles.Text_15_725}>My Books</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26cf/f297/d1e88583caeb819ef792d61741d410df"
          }}
          style={styles.ImageBackground_15_726}
        />
        <View style={styles.View_15_727}>
          <View style={styles.View_15_728}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df8f/a8df/d9d996601cfdae708e029de3c3741e3b"
              }}
              style={styles.ImageBackground_15_729}
            />
            <View style={styles.View_15_730}>
              <View style={styles.View_15_731}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2972/f72e/fed349ba389a6cfdb12fb4c6b94932df"
                  }}
                  style={styles.ImageBackground_15_732}
                />
              </View>
            </View>
            <View style={styles.View_15_734}>
              <View style={styles.View_15_735}>
                <Text style={styles.Text_15_735}>Search book</Text>
              </View>
              <View style={styles.View_15_736}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4f/0d31/472e0d69b2809b525edd230fc8feedd3"
                  }}
                  style={styles.ImageBackground_15_737}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_15_739}>
          <View style={styles.View_15_740}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cacb/a7ab/16b0b8ec990b42f4f2f694942993cf90"
              }}
              style={styles.ImageBackground_15_741}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a1/c75e/d93fc771271f380e7ee6e14fb1fc114e"
              }}
              style={styles.ImageBackground_15_756}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c32/1b62/266b374da084ad3c31598f4edaeed3e7"
              }}
              style={styles.ImageBackground_15_760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dc6/0623/d1e356a4ec9157667507a58e087c48b0"
              }}
              style={styles.ImageBackground_15_764}
            />
          </View>
          <View style={styles.View_15_769}>
            <Text style={styles.Text_15_769}>5:40 PM</Text>
          </View>
        </View>
        <View style={styles.View_15_773}>
          <View style={styles.View_15_774}>
            <View style={styles.View_15_775}>
              <Text style={styles.Text_15_775}>My Book List</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_15_776}>
          <View style={styles.View_15_777} />
          <View style={styles.View_15_778}>
            <View style={styles.View_15_779}>
              <Text style={styles.Text_15_779}>ADD BOOK REVIEW</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_18_3} />
        <View style={styles.View_18_4}>
          <Text style={styles.Text_18_4}>BOOKS REVIEWED BY YOU</Text>
        </View>
        <View style={styles.View_18_5}>
          <View style={styles.View_18_6} />
          <View style={styles.View_18_36}>
            <View style={styles.View_18_35} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c1/312d/cabfa90208ed5cfa47e69b66b807cc43"
              }}
              style={styles.ImageBackground_18_34}
            />
          </View>
          <View style={styles.View_18_22}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_27}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8644/ca2d/dc6748c1061d5458f3da6e17261401a2"
              }}
              style={styles.ImageBackground_18_29}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5dd/33de/d2e805fa2066caab75848f3bf797616c"
              }}
              style={styles.ImageBackground_18_31}
            />
          </View>
          <View style={styles.View_18_37}>
            <Text style={styles.Text_18_37}>Remote: Office Not Required</Text>
          </View>
          <View style={styles.View_18_38}>
            <Text style={styles.Text_18_38}>Jason Fried</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_708}>
        <View style={styles.View_22_771} />
        <View style={styles.View_23_20} />
        <View style={styles.View_23_29}>
          <View style={styles.View_23_21}>
            <View style={styles.View_23_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e15/d219/ed4053ac0e136fb890d1f9eb626cadd7"
                }}
                style={styles.ImageBackground_23_23}
              />
            </View>
          </View>
          <View style={styles.View_23_26}>
            <View style={styles.View_23_27}>
              <View style={styles.View_23_28}>
                <Text style={styles.Text_23_28}>
                  We are importing your friends. This won’t take too long.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_3}>
        <View style={styles.View_8_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ce4/f484/5a9ebcaf0f3950c3277ecae6ad91d215"
            }}
            style={styles.ImageBackground_8_13}
          />
          <View style={styles.View_8_14} />
          <View style={styles.View_8_21}>
            <View style={styles.View_8_22}>
              <View style={styles.View_8_23}>
                <View style={styles.View_8_24}>
                  <Text style={styles.Text_8_24}>Password</Text>
                </View>
              </View>
              <View style={styles.View_8_25}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/c2f9/d74f940f91688fe6ad8e963303b36137"
                  }}
                  style={styles.ImageBackground_8_26}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53fd/2e70/28cdf10a8b56c2c15923d2432205366f"
                  }}
                  style={styles.ImageBackground_8_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5183/1636/9e5e82f34cdd6d835712b64d986879de"
                  }}
                  style={styles.ImageBackground_8_36}
                />
              </View>
              <View style={styles.View_8_39}>
                <View style={styles.View_8_40}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ce/13ea/f5cfcf0d637cb0ba636fc552ba9bfb3a"
                    }}
                    style={styles.ImageBackground_8_41}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_8_43}>
              <View style={styles.View_8_44}>
                <View style={styles.View_8_45}>
                  <Text style={styles.Text_8_45}>TYPE PASSWORD AGAIN</Text>
                </View>
              </View>
              <View style={styles.View_8_46}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/c2f9/d74f940f91688fe6ad8e963303b36137"
                  }}
                  style={styles.ImageBackground_8_47}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9030/2ff6/e5dee1f5321087908c8e1b02bf9cc466"
                  }}
                  style={styles.ImageBackground_8_48}
                />
                <View style={styles.View_8_54}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6a0/b7a6/842f06977cfcf7b0735df0e7be6123ec"
                    }}
                    style={styles.ImageBackground_8_55}
                  />
                  <View style={styles.View_8_56} />
                </View>
              </View>
              <View style={styles.View_8_57}>
                <View style={styles.View_8_58}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ce/13ea/f5cfcf0d637cb0ba636fc552ba9bfb3a"
                    }}
                    style={styles.ImageBackground_8_59}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_8_61}>
              <View style={styles.View_8_62}>
                <Text style={styles.Text_8_62}>Welcome!</Text>
              </View>
            </View>
            <View style={styles.View_8_63}>
              <View style={styles.View_8_64}>
                <View style={styles.View_8_65}>
                  <Text style={styles.Text_8_65}>Email</Text>
                </View>
              </View>
              <View style={styles.View_8_66}>
                <View style={styles.View_8_67}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/c2f9/d74f940f91688fe6ad8e963303b36137"
                    }}
                    style={styles.ImageBackground_8_68}
                  />
                  <View style={styles.View_8_69}>
                    <View style={styles.View_8_70}>
                      <Text style={styles.Text_8_70}>ducawizard@gmail.com</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5183/1636/9e5e82f34cdd6d835712b64d986879de"
                  }}
                  style={styles.ImageBackground_8_71}
                />
              </View>
            </View>
            <View style={styles.View_8_78}>
              <View style={styles.View_8_79} />
              <View style={styles.View_8_80}>
                <View style={styles.View_8_81}>
                  <Text style={styles.Text_8_81}>Sign Up</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_82}>
              <View style={styles.View_8_83}>
                <Text style={styles.Text_8_83}>
                  Already have an account? Login
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_8_115}>
            <Text style={styles.Text_8_115}>
              Create your account to get started. After that, you can share
              books and make friends.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bfd/9c61/12ac282ad27ad28c6e3972011ac13d74"
            }}
            style={styles.ImageBackground_8_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bfd/9c61/12ac282ad27ad28c6e3972011ac13d74"
            }}
            style={styles.ImageBackground_8_119}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4416/55e1/9523d1a8a5647a15c4f97b7e86c4ea82"
            }}
            style={styles.ImageBackground_8_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36d0/f60c/61583dcd27594f8062b5b8950964fbef"
            }}
            style={styles.ImageBackground_8_121}
          />
        </View>
        <View style={styles.View_8_129}>
          <View style={styles.View_8_138} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ce4/f484/5a9ebcaf0f3950c3277ecae6ad91d215"
            }}
            style={styles.ImageBackground_8_145}
          />
          <View style={styles.View_8_146}>
            <View style={styles.View_8_147}>
              <View style={styles.View_8_148}>
                <View style={styles.View_8_149}>
                  <Text style={styles.Text_8_149}>Password</Text>
                </View>
              </View>
              <View style={styles.View_8_150}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/c2f9/d74f940f91688fe6ad8e963303b36137"
                  }}
                  style={styles.ImageBackground_8_151}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53fd/2e70/28cdf10a8b56c2c15923d2432205366f"
                  }}
                  style={styles.ImageBackground_8_152}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5183/1636/9e5e82f34cdd6d835712b64d986879de"
                  }}
                  style={styles.ImageBackground_8_161}
                />
              </View>
              <View style={styles.View_8_164}>
                <View style={styles.View_8_165}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ce/13ea/f5cfcf0d637cb0ba636fc552ba9bfb3a"
                    }}
                    style={styles.ImageBackground_8_166}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_8_168}>
              <View style={styles.View_8_169}>
                <Text style={styles.Text_8_169}>Sign In</Text>
              </View>
            </View>
            <View style={styles.View_8_170}>
              <View style={styles.View_8_171}>
                <View style={styles.View_8_172}>
                  <Text style={styles.Text_8_172}>Email</Text>
                </View>
              </View>
              <View style={styles.View_8_173}>
                <View style={styles.View_8_174}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387d/c2f9/d74f940f91688fe6ad8e963303b36137"
                    }}
                    style={styles.ImageBackground_8_175}
                  />
                  <View style={styles.View_8_176}>
                    <View style={styles.View_8_177}>
                      <Text style={styles.Text_8_177}>
                        ducawizard@gmail.com
                      </Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5183/1636/9e5e82f34cdd6d835712b64d986879de"
                  }}
                  style={styles.ImageBackground_8_178}
                />
              </View>
            </View>
            <View style={styles.View_8_185}>
              <View style={styles.View_8_186} />
              <View style={styles.View_8_187}>
                <View style={styles.View_8_188}>
                  <Text style={styles.Text_8_188}>Sign Up</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_8_189}>
              <View style={styles.View_8_190}>
                <Text style={styles.Text_8_190}>
                  New here? Create an account
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bfd/9c61/12ac282ad27ad28c6e3972011ac13d74"
            }}
            style={styles.ImageBackground_8_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4416/55e1/9523d1a8a5647a15c4f97b7e86c4ea82"
            }}
            style={styles.ImageBackground_8_225}
          />
        </View>
      </View>
      <View style={styles.View_8_226}>
        <View style={styles.View_8_227}>
          <View style={styles.View_8_228} />
          <View style={styles.View_8_229}>
            <View style={styles.View_8_230}>
              <Text style={styles.Text_8_230}>Skip</Text>
            </View>
          </View>
          <View style={styles.View_8_231}>
            <View style={styles.View_8_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_233}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_234}
              />
              <View style={styles.View_8_235} />
            </View>
          </View>
          <View style={styles.View_8_236}>
            <View style={styles.View_8_237}>
              <View style={styles.View_8_238}>
                <Text style={styles.Text_8_238}>Read Books</Text>
              </View>
            </View>
            <View style={styles.View_8_239}>
              <Text style={styles.Text_8_239}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
            <View style={styles.View_8_240}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aee/9595/61717ba671b67aa1a40e0ea5793cc787"
                }}
                style={styles.ImageBackground_8_241}
              />
              <View style={styles.View_8_242}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e13a/a63f/edfd5fad27dfbbb861edd7303342afb3"
                  }}
                  style={styles.ImageBackground_8_243}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a38/6d07/15f8b369b1d21fbf261583d60ed8fb90"
            }}
            style={styles.ImageBackground_8_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c4b/843a/b44786caf607badd404c9190ffdbf3f2"
            }}
            style={styles.ImageBackground_8_248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d89/51cc/3fa96954b800795938c44f0e2e94ee68"
            }}
            style={styles.ImageBackground_8_249}
          />
          <View style={styles.View_8_250}>
            <View style={styles.View_8_251}>
              <Text style={styles.Text_8_251}>Skip Intro</Text>
            </View>
          </View>
          <View style={styles.View_8_307}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bace/3696/2168f31f0e8da59ef81b9ae985d08341"
              }}
              style={styles.ImageBackground_8_301}
            />
            <View style={styles.View_8_303}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/062a/9edb/a1abd1696fa98047d0860857a0f069d6"
                }}
                style={styles.ImageBackground_8_304}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_8_252}>
          <View style={styles.View_8_253} />
          <View style={styles.View_8_254}>
            <View style={styles.View_8_255}>
              <Text style={styles.Text_8_255}>Skip</Text>
            </View>
          </View>
          <View style={styles.View_8_256}>
            <View style={styles.View_8_257}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_258}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_259}
              />
              <View style={styles.View_8_260} />
            </View>
          </View>
          <View style={styles.View_8_261}>
            <View style={styles.View_8_262}>
              <View style={styles.View_8_263}>
                <Text style={styles.Text_8_263}>Review Them</Text>
              </View>
            </View>
            <View style={styles.View_8_264}>
              <Text style={styles.Text_8_264}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5572/b43e/bdcc20783d95e33f2817e47c78553d5d"
              }}
              style={styles.ImageBackground_8_265}
            />
          </View>
          <View style={styles.View_8_267}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0a/442e/a679fa7f8bfce577414591662154c05e"
              }}
              style={styles.ImageBackground_8_268}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607e/3082/b8533023a3d8b8168aa753f8a95a6908"
            }}
            style={styles.ImageBackground_8_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c4b/843a/b44786caf607badd404c9190ffdbf3f2"
            }}
            style={styles.ImageBackground_8_271}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa9/c2e9/750c510178f8fdecc088ad467393a597"
            }}
            style={styles.ImageBackground_8_272}
          />
          <View style={styles.View_8_273}>
            <View style={styles.View_8_274}>
              <Text style={styles.Text_8_274}>Skip Intro</Text>
            </View>
          </View>
          <View style={styles.View_8_314}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bace/3696/2168f31f0e8da59ef81b9ae985d08341"
              }}
              style={styles.ImageBackground_8_315}
            />
            <View style={styles.View_8_316}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/062a/9edb/a1abd1696fa98047d0860857a0f069d6"
                }}
                style={styles.ImageBackground_8_317}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_8_275}>
          <View style={styles.View_8_276} />
          <View style={styles.View_8_277}>
            <View style={styles.View_8_278}>
              <Text style={styles.Text_8_278}>Skip</Text>
            </View>
          </View>
          <View style={styles.View_8_279}>
            <View style={styles.View_8_280}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_281}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d8/4731/78e1b0b9790ee4746a3d507d60b8087a"
                }}
                style={styles.ImageBackground_8_282}
              />
              <View style={styles.View_8_283} />
            </View>
          </View>
          <View style={styles.View_8_284}>
            <View style={styles.View_8_285}>
              <View style={styles.View_8_286}>
                <Text style={styles.Text_8_286}>Share, Make Friends</Text>
              </View>
            </View>
            <View style={styles.View_8_287}>
              <Text style={styles.Text_8_287}>
                Create your account to get started. After that, you can share
                books and make friends.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83dd/6599/2c024362bc85ecd585f5b2f789fbd73e"
              }}
              style={styles.ImageBackground_8_288}
            />
          </View>
          <View style={styles.View_8_290}>
            <View style={styles.View_8_291}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2143/3a8d/d33d69908afbfa2a57d8ff99478f11df"
                }}
                style={styles.ImageBackground_8_292}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/814d/ade7/41b7740c9aa366bf746c621ccd5d1c5e"
            }}
            style={styles.ImageBackground_8_296}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c4b/843a/b44786caf607badd404c9190ffdbf3f2"
            }}
            style={styles.ImageBackground_8_297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8af/3fd4/12f21bada0e4629ddfae91b62051344d"
            }}
            style={styles.ImageBackground_8_298}
          />
          <View style={styles.View_8_299}>
            <View style={styles.View_8_300}>
              <Text style={styles.Text_8_300}>Skip Intro</Text>
            </View>
          </View>
          <View style={styles.View_8_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bace/3696/2168f31f0e8da59ef81b9ae985d08341"
              }}
              style={styles.ImageBackground_8_309}
            />
            <View style={styles.View_8_310}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/062a/9edb/a1abd1696fa98047d0860857a0f069d6"
                }}
                style={styles.ImageBackground_8_311}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("530.7377049180328%") },
  View_1_2836: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.53212520593081%"),
    top: hp("-389.07103825136613%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_320: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.255354200988467%"),
    top: hp("262.0218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_321: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.686161449752884%"),
    top: hp("26.09289617486337%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_346: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_347: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_348: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_349: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_351: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_8_350: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939043%"),
    top: hp("6.284153005464532%"),
    justifyContent: "flex-start"
  },
  Text_8_350: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_8_357: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_358: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_359: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1853377265238887%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_8_359: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_8_360: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_8_450: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8509060955518954%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_451: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_452: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388691%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_8_452: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_8_455: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955512%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_456: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.1707650273224317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906097082%")
  },
  ImageBackground_10_0: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080743%"),
    top: hp("9.836065573770497%")
  },
  View_8_449: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.91515650741351%"),
    top: hp("2.5956284153005527%")
  },
  View_8_443: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_444: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025809223608680654%")
  },
  View_8_448: {
    width: wp("1.9357495881383853%"),
    top: hp("3.688524590163979%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_448: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_8_461: {
    width: wp("16.804774628439688%"),
    height: hp("33.62674400454662%"),
    top: hp("-12.858873377732266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.551070840197693%")
  },
  View_10_531: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("16.393442622950772%")
  },
  View_8_363: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_364: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_365: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945626%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_513: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32948929159802276%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_514: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_532: {
    width: wp("3.2331136738056014%"),
    minWidth: wp("3.2331136738056014%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41186161449752845%"),
    top: hp("2.185792349726796%")
  },
  View_8_366: {
    width: wp("2.697693574958814%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.535420098846787%"),
    justifyContent: "flex-start"
  },
  Text_8_366: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_516: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_517: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_367: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_368: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    top: hp("1.639344262295026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_369: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_384: {
    width: wp("0.45092604698419964%"),
    height: hp("1.365800242606408%"),
    top: hp("0.6833936347336476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.96258293541495%")
  },
  ImageBackground_8_388: {
    width: wp("0.28307783544750936%"),
    height: hp("1.3214812252690884%"),
    top: hp("0.68306010928967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.586201147742486%")
  },
  ImageBackground_8_392: {
    width: wp("0.3150991199436848%"),
    height: hp("1.2854615195852812%"),
    top: hp("0.7235500981899463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.177924217462934%")
  },
  View_8_397: {
    width: wp("1.21499176276771%"),
    top: hp("1.9125683060108827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41186161449752845%"),
    justifyContent: "center"
  },
  Text_8_397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_398: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.020593080724875534%"),
    top: hp("50.81967213114751%")
  },
  View_8_399: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_400: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_400: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_419: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434927%"),
    top: hp("9.426229508196684%")
  },
  View_8_420: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_421: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.5329489291598026%"),
    justifyContent: "flex-start"
  },
  Text_8_421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_434: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4736408566721586%"),
    top: hp("89.34426229508193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_435: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434925853%")
  },
  View_8_436: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434925853%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_437: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_8_439: {
    width: wp("1.3179571663920924%"),
    minWidth: wp("1.3179571663920924%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.19192751235585%"),
    top: hp("40.3005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_440: {
    width: wp("1.2355848434925865%"),
    height: hp("8.37888040177809%"),
    top: hp("0.1821715975068514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.054914043998401496%")
  },
  View_10_1: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.328665568369026%"),
    top: hp("147.26775956284152%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_2: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6861614497528876%"),
    top: hp("26.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_27: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_28: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.6393442622951113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_29: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_30: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_31: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453129%"),
    top: hp("1.0928961748633697%")
  },
  View_10_34: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_10_34: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_10_35: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_36: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_37: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_10_37: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_10_38: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_10_40: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_41: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_42: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_10_42: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_10_43: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_44: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732240328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_10_49: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770497%")
  },
  View_10_50: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153005527%")
  },
  View_10_51: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_52: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_10_56: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_56: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_10_57: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%")
  },
  View_10_62: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_63: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_64: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_79: {
    width: wp("0.45092604698419964%"),
    height: hp("1.365800242606408%"),
    top: hp("0.6833936347336191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.96258293541495%")
  },
  ImageBackground_10_83: {
    width: wp("0.28307783544750936%"),
    height: hp("1.3214812252690884%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.586201147742486%")
  },
  ImageBackground_10_87: {
    width: wp("0.3150991199436848%"),
    height: hp("1.2854615195852812%"),
    top: hp("0.7235500981899179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.17792421746293%")
  },
  View_10_92: {
    width: wp("1.21499176276771%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.411861614497532%"),
    justifyContent: "center"
  },
  Text_10_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_96: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196712%")
  },
  View_10_97: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_98: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_10_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_99: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667216216%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_100: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_10_101: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_102: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_10_507: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_509: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_510: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  },
  View_10_533: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("16.39344262295083%")
  },
  View_10_534: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_535: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_536: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945661%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_537: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32948929159802276%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_538: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_540: {
    width: wp("4.757001647446458%"),
    minWidth: wp("4.757001647446458%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.1857923497267677%")
  },
  View_10_541: {
    width: wp("4.22158154859967%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5354200988467923%"),
    justifyContent: "flex-start"
  },
  Text_10_541: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_542: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_545: {
    width: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_546: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1802778452471956%"),
    top: hp("0.0020678577527348807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_897: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.28665568369028%"),
    top: hp("147.26775956284152%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_898: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6861614497528876%"),
    top: hp("26.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_923: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_924: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.6393442622951113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_925: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_926: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_927: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453129%"),
    top: hp("1.0928961748633697%")
  },
  View_10_930: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_10_930: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_10_931: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_932: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_933: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_10_933: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_10_934: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_10_936: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_937: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_938: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_10_938: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_10_939: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_940: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732240328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_10_945: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080797%"),
    top: hp("9.836065573770497%")
  },
  View_10_946: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153005527%")
  },
  View_10_947: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_948: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_10_952: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_952: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_10_953: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%")
  },
  View_10_955: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_956: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_957: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_972: {
    width: wp("0.45092604698419964%"),
    height: hp("1.365800242606408%"),
    top: hp("0.6833936347336191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.96258293541495%")
  },
  ImageBackground_10_976: {
    width: wp("0.28307783544750936%"),
    height: hp("1.3214812252690884%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.586201147742486%")
  },
  ImageBackground_10_980: {
    width: wp("0.3150991199436848%"),
    height: hp("1.2854615195852812%"),
    top: hp("0.7235500981899179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.17792421746293%")
  },
  View_10_985: {
    width: wp("1.21499176276771%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.411861614497532%"),
    justifyContent: "center"
  },
  Text_10_985: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_986: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196712%")
  },
  View_10_987: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_988: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_10_988: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_989: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667216216%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_990: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_10_991: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_992: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_992: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_10_993: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_995: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_996: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  },
  View_10_999: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("16.39344262295083%")
  },
  View_10_1000: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_1001: {
    width: wp("6.486820428336079%"),
    height: hp("27.595630499834574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_1002: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945661%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_1003: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32948929159802276%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_1004: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_1006: {
    width: wp("4.757001647446458%"),
    minWidth: wp("4.757001647446458%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.1857923497267677%")
  },
  View_10_1007: {
    width: wp("4.22158154859967%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5354200988467923%"),
    justifyContent: "flex-start"
  },
  Text_10_1007: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_1008: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_1009: {
    width: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_1010: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1802778452471956%"),
    top: hp("0.0020678577527348807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_1012: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%")
  },
  View_10_1013: {
    width: wp("4.22158154859967%"),
    top: hp("25.409836065573785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5650741350906117%"),
    justifyContent: "flex-start"
  },
  Text_10_1013: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_1017: {
    width: wp("5.539538714991762%"),
    top: hp("39.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5650741350906117%"),
    justifyContent: "flex-start"
  },
  Text_10_1017: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_1023: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("30.191256830601105%")
  },
  View_10_1015: {
    width: wp("4.22158154859967%"),
    top: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5650741350906117%"),
    justifyContent: "flex-start"
  },
  Text_10_1015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_2: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.244645799011536%"),
    top: hp("147.26775956284152%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_3: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6861614497528805%"),
    top: hp("26.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_128: {
    width: wp("3.747940691927512%"),
    top: hp("-0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02059308072487198%"),
    justifyContent: "flex-start"
  },
  Text_13_128: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_129: {
    width: wp("7.7224052718286655%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02059308072487198%"),
    justifyContent: "flex-end"
  },
  Text_13_129: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_150: {
    width: wp("7.7224052718286655%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02059308072487198%"),
    justifyContent: "flex-end"
  },
  Text_13_150: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_28: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_29: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.6393442622951113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_30: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.807248764415149%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_31: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_32: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_13_35: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_13_35: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_36: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_37: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_38: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388336%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_13_38: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_13_39: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675452987%"),
    top: hp("1.0928961748633697%")
  },
  View_13_41: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551885%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_42: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_43: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389757%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_13_43: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_44: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955619%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_45: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732240328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_13_50: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080654%"),
    top: hp("9.836065573770497%")
  },
  View_13_51: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135064%"),
    top: hp("2.5956284153005527%")
  },
  View_13_52: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_53: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02581173741247511%")
  },
  View_13_57: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_57: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_13_58: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%")
  },
  View_13_60: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_61: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_62: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_77: {
    width: wp("0.45092604698419964%"),
    height: hp("1.365800242606408%"),
    top: hp("0.6833936347336191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.96258293541495%")
  },
  ImageBackground_13_81: {
    width: wp("0.28307783544750936%"),
    height: hp("1.3214812252690884%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.586206175350085%")
  },
  ImageBackground_13_85: {
    width: wp("0.3150991199436848%"),
    height: hp("1.2854615195852812%"),
    top: hp("0.7235500981899179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.177924217462923%")
  },
  View_13_90: {
    width: wp("1.21499176276771%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975178%"),
    justifyContent: "center"
  },
  Text_13_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_91: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5123558484349218%"),
    top: hp("9.426229508196712%")
  },
  View_13_92: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_93: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159808%"),
    justifyContent: "flex-start"
  },
  Text_13_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_94: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667215505%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_95: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_13_96: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_97: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_13_98: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_100: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_101: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041186161449758174%")
  },
  View_13_127: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("16.39344262295083%")
  },
  View_13_126: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_125: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_133: {
    width: wp("6.486820428336079%"),
    top: hp("48.08743169398909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    justifyContent: "flex-start"
  },
  Text_13_133: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_134: {
    width: wp("6.486820428336079%"),
    top: hp("64.75409836065577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    justifyContent: "flex-start"
  },
  Text_13_134: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_135: {
    width: wp("3.4184514003294892%"),
    minWidth: wp("3.4184514003294892%"),
    height: hp("5.531147399235293%"),
    minHeight: hp("5.531147399235293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.141680395387148%"),
    top: hp("78.00546448087434%")
  },
  View_13_136: {
    width: wp("3.4184514003294892%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_136: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_13_137: {
    width: wp("2.059308072487644%"),
    minWidth: wp("2.059308072487644%"),
    height: hp("2.1158471133539583%"),
    minHeight: hp("2.1158471133539583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6795716639209175%"),
    top: hp("3.4153005464480657%")
  },
  ImageBackground_13_138: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_140: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.432454695222404%")
  },
  ImageBackground_13_142: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8649093904448151%")
  },
  ImageBackground_13_144: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.297364085667219%")
  },
  ImageBackground_13_146: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.729818780889623%")
  },
  ImageBackground_13_148: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.26775956284155%")
  },
  View_13_155: {
    width: wp("7.990115321252059%"),
    minWidth: wp("7.990115321252059%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7067545304777525%"),
    top: hp("34.28961748633881%")
  },
  View_13_151: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2677100494233926%"),
    justifyContent: "flex-end"
  },
  Text_13_151: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_152: {
    width: wp("0.20456928790499393%"),
    height: hp("1.3136612261579337%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_156: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.20263591433278%"),
    top: hp("147.26775956284152%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_157: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6861614497528947%"),
    top: hp("26.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_158: {
    width: wp("3.747940691927512%"),
    top: hp("-0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020593080724864876%"),
    justifyContent: "flex-start"
  },
  Text_13_158: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_159: {
    width: wp("7.7224052718286655%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020593080724864876%"),
    justifyContent: "flex-end"
  },
  Text_13_159: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_160: {
    width: wp("7.7224052718286655%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020593080724864876%"),
    justifyContent: "flex-end"
  },
  Text_13_160: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_185: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_186: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.6393442622951113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_187: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_188: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_189: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_13_192: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.99258649093904%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_13_192: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_193: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_194: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_195: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_13_195: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_13_196: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748633697%")
  },
  View_13_198: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.6393442622951113%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_199: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_200: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388336%"),
    top: hp("4.644808743169364%"),
    justifyContent: "flex-start"
  },
  Text_13_200: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_201: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_202: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732240328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02574135090610241%")
  },
  ImageBackground_13_207: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770497%")
  },
  View_13_208: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135064%"),
    top: hp("2.5956284153005527%")
  },
  View_13_209: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_210: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_13_214: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_214: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_13_215: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%")
  },
  View_13_248: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434936%"),
    top: hp("9.426229508196712%")
  },
  View_13_249: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_250: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159808%"),
    justifyContent: "flex-start"
  },
  Text_13_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_251: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667216216%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_252: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1235584843492532%")
  },
  View_13_253: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1235584843492532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_254: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_13_255: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_257: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_258: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144974396%")
  },
  View_13_262: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("16.39344262295083%")
  },
  View_13_263: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_264: {
    width: wp("2.6741587153376623%"),
    minWidth: wp("2.6741587153376623%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_281: {
    width: wp("7.990115321252059%"),
    minWidth: wp("7.990115321252059%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7067545304777596%"),
    top: hp("34.28961748633881%")
  },
  View_13_282: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2677100494233997%"),
    justifyContent: "flex-end"
  },
  Text_13_282: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_283: {
    width: wp("0.20456928790499393%"),
    height: hp("1.3136612261579337%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_285: {
    width: wp("6.486820428336079%"),
    height: hp("35.51912568306011%"),
    top: hp("51.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%")
  },
  View_13_286: {
    width: wp("6.630971993410214%"),
    top: hp("48.08743169398909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    justifyContent: "flex-start"
  },
  Text_13_286: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_13_287: {
    width: wp("5.518945634266887%"),
    top: hp("53.82513661202188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0296540362438193%"),
    justifyContent: "flex-start"
  },
  Text_13_287: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_2: {
    width: wp("84.34925864909391%"),
    minWidth: wp("84.34925864909391%"),
    height: hp("272.9508196721311%"),
    minHeight: hp("272.9508196721311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-40.1153212520593%"),
    top: hp("-38.93442622950819%"),
    resizeMode: "cover"
  },
  View_18_231: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.28665568369028%"),
    top: hp("266.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_18_260: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_18_261: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_262: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_263: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_264: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453129%"),
    top: hp("1.0928961748634265%")
  },
  View_18_267: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_18_267: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_18_268: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_269: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_270: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_18_270: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_18_271: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_18_273: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_274: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_275: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_18_275: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_18_276: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_277: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732237486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_18_282: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080797%"),
    top: hp("9.836065573770497%")
  },
  View_18_283: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153005527%")
  },
  View_18_284: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_285: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_18_289: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_289: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_18_290: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%")
  },
  View_18_323: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196684%")
  },
  View_18_324: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_325: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_18_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_326: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667216216%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_327: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_18_328: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_329: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_18_330: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_332: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_333: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  },
  View_18_347: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.04918032786884%")
  },
  View_18_348: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_349: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_18_349: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_350: {
    width: wp("1.3179571663920924%"),
    minWidth: wp("1.3179571663920924%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1919275123558535%"),
    top: hp("40.3005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_19_2: {
    width: wp("1.3179571663920924%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_3: {
    width: wp("1.1943989177119398%"),
    height: hp("7.9234988311600825%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06177924217462305%")
  },
  View_19_135: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.244645799011536%"),
    top: hp("266.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_19_259: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("72.26775956284153%"),
    minHeight: hp("72.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.989071038251325%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_20_1: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("88.11475409836066%")
  },
  View_20_42: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_2: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_41: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_20_3: {
    width: wp("1.1943986820428336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-end"
  },
  Text_20_3: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_4: {
    width: wp("1.3797364085667216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.10708401976936%"),
    justifyContent: "flex-start"
  },
  Text_20_4: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_5: {
    width: wp("5.127677100494234%"),
    top: hp("3.0054644808742523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-start"
  },
  Text_20_5: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_6: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256829%")
  },
  View_20_7: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_8: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_160: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_19_161: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_162: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.807248764415149%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_163: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_164: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_19_167: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_19_167: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_19_168: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_169: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_170: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388336%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_19_170: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_19_171: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675452987%"),
    top: hp("1.0928961748634265%")
  },
  View_19_173: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551885%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_174: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_175: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389757%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_19_175: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_19_176: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955619%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_177: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732237486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_19_182: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080654%"),
    top: hp("9.836065573770497%")
  },
  View_19_183: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135064%"),
    top: hp("2.5956284153005527%")
  },
  View_19_184: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_185: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02581173741247511%")
  },
  View_19_189: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_189: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_19_190: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%")
  },
  View_19_223: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5123558484349218%"),
    top: hp("9.426229508196684%")
  },
  View_19_224: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_225: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159808%"),
    justifyContent: "flex-start"
  },
  Text_19_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_230: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_232: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_233: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041186161449758174%")
  },
  View_19_244: {
    width: wp("6.466227347611203%"),
    top: hp("27.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    justifyContent: "flex-end"
  },
  Text_19_244: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_19_245: {
    width: wp("9.205107084019769%"),
    minWidth: wp("9.205107084019769%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("31.420765027322375%")
  },
  View_20_18: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_246: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_13: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_20_21: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5238879736408606%"),
    top: hp("0%")
  },
  View_19_247: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_20: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_20_24: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.047775947281714%"),
    top: hp("0%")
  },
  View_19_248: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_23: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_20_35: {
    width: wp("1.400329489291598%"),
    minWidth: wp("1.400329489291598%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.061779242174630156%"),
    top: hp("-0.4098360655737565%"),
    resizeMode: "cover"
  },
  View_20_27: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571663920922575%"),
    top: hp("0%")
  },
  View_19_249: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_26: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_20_33: {
    width: wp("1.400329489291598%"),
    minWidth: wp("1.400329489291598%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.061779242174630156%"),
    top: hp("-0.4098360655737565%"),
    resizeMode: "cover"
  },
  View_20_31: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.116144975288307%"),
    top: hp("0%")
  },
  View_19_250: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_29: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_19_251: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9283360790774395%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  View_19_253: {
    width: wp("6.466227347611203%"),
    top: hp("48.08743169398906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    justifyContent: "flex-end"
  },
  Text_19_253: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_19_254: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("52.459016393442596%")
  },
  View_20_40: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_255: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_39: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_19_256: {
    width: wp("1.1943986820428336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-end"
  },
  Text_19_256: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_257: {
    width: wp("1.3797364085667216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.10708401976936%"),
    justifyContent: "flex-start"
  },
  Text_19_257: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_258: {
    width: wp("5.127677100494234%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-start"
  },
  Text_19_258: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_261: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("70.35519125683061%")
  },
  View_20_38: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_262: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_20_37: {
    width: wp("0.8855024711696869%"),
    minWidth: wp("0.8855024711696869%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_19_263: {
    width: wp("1.1943986820428336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-end"
  },
  Text_19_263: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_264: {
    width: wp("1.3797364085667216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.10708401976936%"),
    justifyContent: "flex-start"
  },
  Text_19_264: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_265: {
    width: wp("5.127677100494234%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1738056013179587%"),
    justifyContent: "flex-start"
  },
  Text_19_265: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_260: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.25683060109287%")
  },
  ImageBackground_20_0: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84.01639344262293%")
  },
  View_22_778: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.370675453047774%"),
    top: hp("385.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_787: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256834%")
  },
  View_22_788: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_789: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_817: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_818: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_819: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.80724876441516%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_820: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_821: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453023%"),
    top: hp("1.0928961748634265%")
  },
  View_22_824: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464532%"),
    justifyContent: "flex-start"
  },
  Text_22_824: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_22_825: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_826: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_827: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_22_827: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_22_828: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453094%"),
    top: hp("1.0928961748634265%")
  },
  View_22_830: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_831: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_832: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388691%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_22_832: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_22_833: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955512%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_834: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.1707650273224317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_22_839: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770554%")
  },
  View_22_840: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153006095%")
  },
  View_22_841: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_842: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557369967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412478664%")
  },
  View_22_846: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_846: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_22_847: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%")
  },
  View_22_880: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196684%")
  },
  View_22_881: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_882: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_22_882: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_883: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_885: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_886: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.68306010928967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  },
  View_22_890: {
    width: wp("6.466227347611203%"),
    top: hp("27.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-end"
  },
  Text_22_890: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_19: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.55737704918033%")
  },
  ImageBackground_23_2: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_3: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896188%")
  },
  ImageBackground_23_4: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934477%")
  },
  View_23_5: {
    width: wp("4.57166392092257%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-start"
  },
  Text_23_5: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_6: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("2.8688524590163524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_8: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_10: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("9.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  View_23_12: {
    width: wp("4.57166392092257%"),
    top: hp("8.743169398907071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-start"
  },
  Text_23_12: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_13: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.218579234972708%")
  },
  View_23_14: {
    width: wp("4.57166392092257%"),
    top: hp("15.437158469945302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-start"
  },
  Text_23_14: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_15: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("23.087431693989117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_17: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.91256830601094%")
  },
  View_23_18: {
    width: wp("4.57166392092257%"),
    top: hp("22.13114754098359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-start"
  },
  Text_23_18: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_31: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.28665568369028%"),
    top: hp("385.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_32: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256834%")
  },
  View_23_33: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_34: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_62: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_63: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_64: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_65: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_23_66: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453129%"),
    top: hp("1.0928961748634265%")
  },
  View_23_69: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464532%"),
    justifyContent: "flex-start"
  },
  Text_23_69: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_23_70: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_71: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_72: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_23_72: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_23_73: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_23_75: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_76: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_77: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_23_77: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_23_78: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_79: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.1707650273224317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_23_84: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080797%"),
    top: hp("9.836065573770554%")
  },
  View_23_85: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153006095%")
  },
  View_23_86: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_87: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557369967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_23_91: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_91: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_23_92: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%")
  },
  View_23_125: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196684%")
  },
  View_23_126: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_127: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_23_127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_128: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_130: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_131: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.68306010928967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  },
  View_23_157: {
    width: wp("8.340197693574959%"),
    minWidth: wp("8.340197693574959%"),
    height: hp("38.114754098360656%"),
    minHeight: hp("38.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.04918032786884%")
  },
  ImageBackground_23_158: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311492%")
  },
  ImageBackground_23_159: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.33879781420768%")
  },
  ImageBackground_23_160: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.03278688524597%")
  },
  View_23_161: {
    width: wp("4.57166392092257%"),
    top: hp("6.420765027322432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    justifyContent: "flex-start"
  },
  Text_23_161: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_162: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("7.377049180327845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_164: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("20.90163934426232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_166: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("14.207650273224033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  View_23_168: {
    width: wp("4.57166392092257%"),
    top: hp("13.251366120218563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    justifyContent: "flex-start"
  },
  Text_23_168: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_169: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.7267759562842%")
  },
  View_23_170: {
    width: wp("4.57166392092257%"),
    top: hp("19.945355191256795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    justifyContent: "flex-start"
  },
  Text_23_170: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_171: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("33.60655737704923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_172: {
    width: wp("0.2883031301482702%"),
    height: hp("1.912568306010929%"),
    top: hp("0.20491803278684984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03088962108731863%")
  },
  ImageBackground_23_176: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("27.59562841530061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_178: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.42076502732243%")
  },
  View_23_179: {
    width: wp("4.57166392092257%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    justifyContent: "flex-start"
  },
  Text_23_179: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_180: {
    width: wp("0.10296540362438221%"),
    height: hp("1.2295081967213115%"),
    top: hp("34.28961748633884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.001647446457994%")
  },
  ImageBackground_23_182: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.11475409836066%")
  },
  View_23_183: {
    width: wp("4.57166392092257%"),
    top: hp("33.333333333333314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    justifyContent: "flex-start"
  },
  Text_23_183: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_184: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("6.830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_185: {
    width: wp("0.3088962108731466%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.06830601092894995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.010296540362439544%")
  },
  View_23_189: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("13.661202185792376%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_190: {
    width: wp("0.3088962108731466%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.06830601092894995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.010296540362439544%")
  },
  View_23_193: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("27.049180327868896%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_194: {
    width: wp("0.3088962108731466%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.06830601092894995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.010296540362439544%")
  },
  View_23_201: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("20.218579234972708%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_202: {
    width: wp("0.26771004942339377%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.06830601092894995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03088962108731863%")
  },
  View_23_156: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-start"
  },
  Text_23_156: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_206: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.244645799011536%"),
    top: hp("385.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_207: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256834%")
  },
  View_23_208: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_209: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_237: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_238: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_239: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.807248764415149%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_240: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_23_241: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_23_244: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464532%"),
    justifyContent: "flex-start"
  },
  Text_23_244: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_23_245: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_246: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_247: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388336%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_23_247: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_23_248: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675452987%"),
    top: hp("1.0928961748634265%")
  },
  View_23_250: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551885%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_251: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_252: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389757%"),
    top: hp("4.644808743169449%"),
    justifyContent: "flex-start"
  },
  Text_23_252: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_23_253: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955619%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_254: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.1707650273224317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_23_259: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080654%"),
    top: hp("9.836065573770554%")
  },
  View_23_260: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135064%"),
    top: hp("2.5956284153006095%")
  },
  View_23_261: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_262: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557369967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02581173741247511%")
  },
  View_23_266: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_266: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_23_267: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%")
  },
  View_23_300: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5123558484349218%"),
    top: hp("9.426229508196684%")
  },
  View_23_301: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_302: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159808%"),
    justifyContent: "flex-start"
  },
  Text_23_302: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_303: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_305: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_306: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.68306010928967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041186161449758174%")
  },
  View_23_362: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("39.48087431693989%")
  },
  View_23_363: {
    width: wp("3.3772652388797364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_363: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_364: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_365: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_366: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945732%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_367: {
    width: wp("2.697693574958814%"),
    top: hp("2.185792349726796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45304777594728307%"),
    justifyContent: "flex-start"
  },
  Text_23_367: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_368: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("51.77595628415304%")
  },
  View_23_369: {
    width: wp("3.3772652388797364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_369: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_370: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_371: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_372: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945732%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_373: {
    width: wp("2.697693574958814%"),
    top: hp("2.185792349726796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45304777594728307%"),
    justifyContent: "flex-start"
  },
  Text_23_373: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_374: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("64.07103825136608%")
  },
  View_23_375: {
    width: wp("3.3772652388797364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_375: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_376: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874423%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_377: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_378: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945732%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_379: {
    width: wp("4.551070840197694%"),
    top: hp("2.1857923497267393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45304777594728307%"),
    justifyContent: "flex-start"
  },
  Text_23_379: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_380: {
    width: wp("8.40197693574959%"),
    minWidth: wp("8.40197693574959%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("76.36612021857923%")
  },
  View_23_381: {
    width: wp("3.3772652388797364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_381: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_382: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_383: {
    width: wp("3.088962108731466%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_384: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945732%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_385: {
    width: wp("4.551070840197694%"),
    top: hp("2.185792349726796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45304777594728307%"),
    justifyContent: "flex-start"
  },
  Text_23_385: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_386: {
    width: wp("3.3772652388797364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.397858319604616%"),
    justifyContent: "flex-start"
  },
  Text_23_386: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_23_387: {
    width: wp("3.088962108731466%"),
    height: hp("6.557377049180328%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.397858319604616%")
  },
  View_23_388: {
    width: wp("4.551070840197694%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    justifyContent: "flex-start"
  },
  Text_23_388: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_389: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667215505%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_390: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_23_391: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371585094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_392: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_23_393: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.827841845140021%"),
    top: hp("27.04918032786884%")
  },
  View_23_394: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_23_395: {
    width: wp("1.2767710049423393%"),
    minWidth: wp("1.2767710049423393%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_23_396: {
    width: wp("3.3772652388797364%"),
    top: hp("30.19125683060105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    justifyContent: "flex-start"
  },
  Text_23_396: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_22_131: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.20263591433278%"),
    top: hp("266.39344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_132: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("72.26775956284153%"),
    minHeight: hp("72.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.989071038251325%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_22_284: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("85.79234972677595%"),
    minHeight: hp("85.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.036243822075782%"),
    top: hp("28.825136612021822%")
  },
  View_22_285: {
    width: wp("6.486820428336079%"),
    height: hp("30.05464480874317%"),
    top: hp("55.73770491803282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_286: {
    width: wp("1.4209225700164745%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6474464579901138%")
  },
  View_22_287: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8739703459637553%"),
    justifyContent: "flex-start"
  },
  Text_22_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_288: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8739703459637553%"),
    justifyContent: "flex-start"
  },
  Text_22_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_289: {
    width: wp("5.374794069192751%"),
    height: hp("10.758197763578488%"),
    top: hp("9.289617486338784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.418451400329481%")
  },
  ImageBackground_22_290: {
    width: wp("1.7915980230642503%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_291: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_291: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_292: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_292: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_293: {
    width: wp("6.486820428336079%"),
    height: hp("30.05464480874317%"),
    top: hp("18.57923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_294: {
    width: wp("3.0683690280065896%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_295: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_296: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_297: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_298: {
    width: wp("3.0683690280065896%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_299: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_300: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_300: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_301: {
    width: wp("5.374794069192751%"),
    height: hp("10.758197763578488%"),
    top: hp("9.289617486338841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.418451400329481%")
  },
  ImageBackground_22_302: {
    width: wp("4.901153212520593%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_303: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_303: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_304: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_304: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_306: {
    width: wp("6.486820428336079%"),
    height: hp("30.05464480874317%"),
    top: hp("18.579234972677625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_307: {
    width: wp("1.4209225700164745%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6474464579901138%")
  },
  View_22_308: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8739703459637553%"),
    justifyContent: "flex-start"
  },
  Text_22_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_309: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8739703459637553%"),
    justifyContent: "flex-start"
  },
  Text_22_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_310: {
    width: wp("5.374794069192751%"),
    height: hp("10.758197763578488%"),
    top: hp("9.289617486338784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.418451400329481%")
  },
  ImageBackground_22_311: {
    width: wp("1.7915980230642503%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_312: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_312: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_313: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_313: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_314: {
    width: wp("6.486820428336079%"),
    height: hp("30.05464480874317%"),
    top: hp("18.57923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_315: {
    width: wp("3.0683690280065896%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_316: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_317: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869852062%"),
    justifyContent: "flex-start"
  },
  Text_22_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_318: {
    width: wp("5.374794069192751%"),
    height: hp("10.758197763578488%"),
    top: hp("9.289617486338784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.418451400329481%")
  },
  ImageBackground_22_319: {
    width: wp("4.901153212520593%"),
    height: hp("7.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_320: {
    width: wp("0.8237232289950577%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_320: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_321: {
    width: wp("5.127677100494234%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851352%"),
    justifyContent: "flex-start"
  },
  Text_22_321: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_143: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256829%")
  },
  View_22_144: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_145: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_170: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_22_171: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_172: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_173: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_174: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_22_177: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.99258649093904%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_22_177: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_22_178: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_179: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_180: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_22_180: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_22_181: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_22_183: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_184: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_185: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388336%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_22_185: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_22_186: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_187: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732237486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02574135090610241%")
  },
  ImageBackground_22_192: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770497%")
  },
  View_22_193: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135064%"),
    top: hp("2.5956284153005527%")
  },
  View_22_194: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_195: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_22_199: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_199: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_22_200: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("16.39344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%")
  },
  View_22_233: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434936%"),
    top: hp("9.426229508196684%")
  },
  View_22_234: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_235: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159808%"),
    justifyContent: "flex-start"
  },
  Text_22_235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_236: {
    width: wp("0.24349155300335204%"),
    minWidth: wp("0.24349155300335204%"),
    height: hp("3.1320803803824333%"),
    minHeight: hp("3.1320803803824333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_238: {
    width: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    top: hp("-0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_239: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144974396%")
  },
  View_22_280: {
    width: wp("1.6062602965403623%"),
    height: hp("10.655737704918032%"),
    top: hp("15.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.068369028006593%")
  },
  View_22_281: {
    width: wp("1.6062602965403623%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 220, 255, 1)"
  },
  ImageBackground_22_282: {
    width: wp("1.6062602965403623%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_22_283: {
    width: wp("1.761704810957932%"),
    height: hp("11.686937926245518%"),
    top: hp("-0.5156303364071277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.07772681347817922%"),
    resizeMode: "cover"
  },
  View_13_288: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.370675453047774%"),
    top: hp("266.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_289: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.686161449752884%"),
    top: hp("26.092896174863426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_342: {
    width: wp("6.960461285008238%"),
    minWidth: wp("6.960461285008238%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("70.21857923497271%")
  },
  View_13_343: {
    width: wp("4.098023064250412%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8624382207578236%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_344: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.480230642504118%"),
    justifyContent: "flex-end"
  },
  Text_13_344: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_13_411: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885192%")
  },
  View_13_420: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_418: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_13_417: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_346: {
    width: wp("1.956342668863262%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_346: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_347: {
    width: wp("1.7915980230642503%"),
    top: hp("20.081967213114808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08237232289950569%"),
    justifyContent: "flex-start"
  },
  Text_13_347: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_421: {
    width: wp("1.9769357495881383%"),
    minWidth: wp("1.9769357495881383%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2652388797364083%"),
    top: hp("4.918032786885192%")
  },
  View_13_423: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.020593080724879087%"),
    top: hp("0%")
  },
  View_13_424: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_13_436: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_426: {
    width: wp("1.956342668863262%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_426: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_427: {
    width: wp("1.7915980230642503%"),
    top: hp("20.081967213114808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08237232289950569%"),
    justifyContent: "flex-start"
  },
  Text_13_427: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_428: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5304777594728165%"),
    top: hp("4.918032786885192%")
  },
  View_13_430: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_431: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_13_432: {
    width: wp("1.956342668863262%"),
    minWidth: wp("1.956342668863262%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_13_442: {
    width: wp("2.4917627677100493%"),
    minWidth: wp("2.4917627677100493%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26771004942338905%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_13_433: {
    width: wp("1.956342668863262%"),
    top: hp("17.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_433: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_434: {
    width: wp("1.7915980230642503%"),
    top: hp("20.081967213114808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08237232289950569%"),
    justifyContent: "flex-start"
  },
  Text_13_434: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_354: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_2: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4736408566721586%"),
    top: hp("7.786885245901658%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_3: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434925676%")
  },
  View_15_4: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434925676%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_5: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_13_355: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360652%")
  },
  View_13_375: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_375: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_8: {
    width: wp("2.800658978583196%"),
    minWidth: wp("2.800658978583196%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.471169686985178%"),
    top: hp("9.153005464480827%")
  },
  View_13_356: {
    width: wp("2.800658978583196%"),
    minWidth: wp("2.800658978583196%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_371: {
    width: wp("2.800658978583196%"),
    height: hp("18.579234972677597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_372: {
    width: wp("1.592531628428024%"),
    height: hp("10.564663371101753%"),
    top: hp("4.735327548668067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6040117493178485%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_373: {
    width: wp("1.4736139401179758%"),
    height: hp("8.682830998154937%"),
    top: hp("0.8913801016051934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05919002426122688%")
  },
  View_13_380: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_381: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_382: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.80724876441516%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_383: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_384: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453023%"),
    top: hp("1.0928961748634265%")
  },
  View_13_387: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_13_387: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_388: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_389: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_390: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_13_390: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_13_391: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453094%"),
    top: hp("1.0928961748634265%")
  },
  View_13_393: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_394: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_395: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652388691%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_13_395: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_13_396: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955512%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_397: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732237486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_13_402: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770497%")
  },
  View_13_403: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153005527%")
  },
  View_13_404: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_405: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412478664%")
  },
  View_13_409: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_409: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_14_9: {
    width: wp("7.7224052718286655%"),
    top: hp("38.25136612021856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_9: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_670: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.328665568369026%"),
    top: hp("266.39344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_15_671: {
    width: wp("2.14168039538715%"),
    minWidth: wp("2.14168039538715%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6861614497528876%"),
    top: hp("26.092896174863426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_82: {
    width: wp("10.234761120263592%"),
    minWidth: wp("10.234761120263592%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("53.96174863387978%")
  },
  View_18_83: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_84: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.7322404371584526%")
  },
  View_18_85: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_18_86: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_18_106: {
    width: wp("1.6680395387149918%"),
    minWidth: wp("1.6680395387149918%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_87: {
    width: wp("2.059308072487644%"),
    minWidth: wp("2.059308072487644%"),
    height: hp("2.1158471133539583%"),
    minHeight: hp("2.1158471133539583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4505766062602987%"),
    top: hp("15.57377049180326%")
  },
  ImageBackground_18_88: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_90: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.432454695222404%")
  },
  ImageBackground_18_92: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.864909390444808%")
  },
  ImageBackground_18_94: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.297364085667219%")
  },
  ImageBackground_18_96: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.729818780889623%")
  },
  View_18_98: {
    width: wp("3.747940691927512%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-start"
  },
  Text_18_98: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_99: {
    width: wp("7.7224052718286655%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-end"
  },
  Text_18_99: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_46: {
    width: wp("10.234761120263592%"),
    minWidth: wp("10.234761120263592%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("76.09289617486343%")
  },
  View_18_47: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_48: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.7322404371583957%")
  },
  View_18_49: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_18_50: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_18_104: {
    width: wp("1.6474464579901154%"),
    minWidth: wp("1.6474464579901154%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054698%"),
    resizeMode: "cover"
  },
  View_18_51: {
    width: wp("2.059308072487644%"),
    minWidth: wp("2.059308072487644%"),
    height: hp("2.1158471133539583%"),
    minHeight: hp("2.1158471133539583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4505766062602987%"),
    top: hp("15.57377049180326%")
  },
  ImageBackground_18_52: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_54: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.432454695222404%")
  },
  ImageBackground_18_56: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.864909390444808%")
  },
  ImageBackground_18_58: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.297364085667219%")
  },
  ImageBackground_18_60: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.729818780889623%")
  },
  View_18_62: {
    width: wp("3.747940691927512%"),
    top: hp("2.7322404371583957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-start"
  },
  Text_18_62: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_63: {
    width: wp("7.7224052718286655%"),
    top: hp("9.69945355191254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-end"
  },
  Text_18_63: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_0: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.45355191256829%")
  },
  View_18_1: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_2: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("36.47540983606557%"),
    minHeight: hp("36.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_15_696: {
    width: wp("7.7224052718286655%"),
    height: hp("11.748633879781421%"),
    top: hp("99.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_15_697: {
    width: wp("7.7224052718286655%"),
    height: hp("10.10928961748634%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_698: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8072487644151565%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_699: {
    width: wp("1.9151565074135088%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_700: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453129%"),
    top: hp("1.0928961748634265%")
  },
  View_15_703: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.992586490939047%"),
    top: hp("6.284153005464475%"),
    justifyContent: "flex-start"
  },
  Text_15_703: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_15_704: {
    width: wp("1.9151565074135088%"),
    minWidth: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_705: {
    width: wp("1.9151565074135088%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_706: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_15_706: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_15_707: {
    width: wp("0.3500823723228995%"),
    minWidth: wp("0.3500823723228995%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("1.0928961748634265%")
  },
  View_15_709: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850906095551899%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_710: {
    width: wp("1.9357495881383853%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_711: {
    width: wp("1.544481054365733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18533772652389047%"),
    top: hp("4.644808743169392%"),
    justifyContent: "flex-start"
  },
  Text_15_711: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  View_15_712: {
    width: wp("0.41186161449752884%"),
    minWidth: wp("0.41186161449752884%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7413509060955477%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_713: {
    width: wp("0.3732495881383855%"),
    height: hp("2.476092896174863%"),
    top: hp("0.17076502732237486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025741350906095306%")
  },
  ImageBackground_15_718: {
    width: wp("2.059308072487644%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8212520593080725%"),
    top: hp("9.836065573770497%")
  },
  View_15_719: {
    width: wp("1.9357495881383853%"),
    minWidth: wp("1.9357495881383853%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9151565074135135%"),
    top: hp("2.5956284153005527%")
  },
  View_15_720: {
    width: wp("0.6194398273549716%"),
    minWidth: wp("0.6194398273549716%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6589785831960455%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_721: {
    width: wp("0.567819809010237%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025811737412482216%")
  },
  View_15_725: {
    width: wp("1.9357495881383853%"),
    top: hp("3.6885245901639223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_725: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11999999731779099,
    textTransform: "none"
  },
  ImageBackground_15_726: {
    width: wp("16.804774628439688%"),
    height: hp("33.62674400454662%"),
    top: hp("-12.858873377732266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.5510708401976885%")
  },
  View_15_727: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("16.39344262295083%")
  },
  View_15_728: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_15_729: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_730: {
    width: wp("4.736408566721582%"),
    minWidth: wp("4.736408566721582%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9060955518945661%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_731: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32948929159802276%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_732: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_734: {
    width: wp("3.2331136738056014%"),
    minWidth: wp("3.2331136738056014%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.1857923497267393%")
  },
  View_15_735: {
    width: wp("2.697693574958814%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5354200988467923%"),
    justifyContent: "flex-start"
  },
  Text_15_735: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_736: {
    width: wp("0.3294892915980231%"),
    minWidth: wp("0.3294892915980231%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_15_737: {
    width: wp("0.3294892915980231%"),
    height: hp("2.199453604025919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_739: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_740: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_741: {
    width: wp("7.7179765779850324%"),
    height: hp("2.7306736492719805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_15_756: {
    width: wp("0.45092604698419964%"),
    height: hp("1.365800242606408%"),
    top: hp("0.6833936347335907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.96258293541495%")
  },
  ImageBackground_15_760: {
    width: wp("0.28307783544750936%"),
    height: hp("1.3214812252690884%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.586201147742486%")
  },
  ImageBackground_15_764: {
    width: wp("0.3150991199436848%"),
    height: hp("1.2854615195852812%"),
    top: hp("0.7235500981898326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.17792421746293%")
  },
  View_15_769: {
    width: wp("1.21499176276771%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.411861614497532%"),
    justifyContent: "center"
  },
  Text_15_769: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_773: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    top: hp("9.426229508196684%")
  },
  View_15_774: {
    width: wp("2.6771004942339376%"),
    minWidth: wp("2.6771004942339376%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_775: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.532948929159801%"),
    justifyContent: "flex-start"
  },
  Text_15_775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_776: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47364085667216216%"),
    top: hp("89.34426229508199%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_777: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%")
  },
  View_15_778: {
    width: wp("6.486820428336079%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12355848434926031%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_779: {
    width: wp("6.486820428336079%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_779: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_18_3: {
    width: wp("6.528006589785831%"),
    height: hp("2.0491803278688523%"),
    top: hp("55.05464480874315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.139209225700164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_4: {
    width: wp("6.466227347611203%"),
    top: hp("27.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    justifyContent: "flex-end"
  },
  Text_18_4: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_18_5: {
    width: wp("10.234761120263592%"),
    minWidth: wp("10.234761120263592%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462945%"),
    top: hp("31.83060109289613%")
  },
  View_18_6: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_36: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    top: hp("2.7322404371585094%")
  },
  View_18_35: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 179, 246, 1)"
  },
  ImageBackground_18_34: {
    width: wp("1.6663920545499447%"),
    minWidth: wp("1.6663920545499447%"),
    height: hp("14.993951099166452%"),
    minHeight: hp("14.993951099166452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_22: {
    width: wp("2.059308072487644%"),
    minWidth: wp("2.059308072487644%"),
    height: hp("2.1158471133539583%"),
    minHeight: hp("2.1158471133539583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4505766062602987%"),
    top: hp("15.573770491803316%")
  },
  ImageBackground_18_23: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_25: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.432454695222404%")
  },
  ImageBackground_18_27: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.864909390444808%")
  },
  ImageBackground_18_29: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.297364085667219%")
  },
  ImageBackground_18_31: {
    width: wp("0.3294892915980231%"),
    height: hp("2.1158471133539583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.729818780889623%")
  },
  View_18_37: {
    width: wp("3.747940691927512%"),
    top: hp("2.7322404371585094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-start"
  },
  Text_18_37: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_38: {
    width: wp("7.7224052718286655%"),
    top: hp("9.699453551912598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.512355848434929%"),
    justifyContent: "flex-end"
  },
  Text_18_38: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_708: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.328665568369026%"),
    top: hp("385.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_771: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    top: hp("98.49726775956282%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_20: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_29: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.30601092896171%")
  },
  View_23_21: {
    width: wp("2.2652388797364087%"),
    minWidth: wp("2.2652388797364087%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7182866556836913%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_23_22: {
    width: wp("3.2034533027762047%"),
    height: hp("21.251324096012635%"),
    top: hp("-3.112059212773204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4691059546179943%")
  },
  ImageBackground_23_23: {
    width: wp("3.2034529885507297%"),
    height: hp("21.251324096012635%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_26: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.44262295081967%")
  },
  View_23_27: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_28: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_3: {
    width: wp("16.680395387149918%"),
    minWidth: wp("16.680395387149918%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.244645799011536%"),
    top: hp("28.142076502732237%")
  },
  View_8_4: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_13: {
    width: wp("1.4148861415303715%"),
    height: hp("9.38618456731077%"),
    top: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.033772652388791%")
  },
  View_8_14: {
    width: wp("11.705387875904165%"),
    minWidth: wp("11.705387875904165%"),
    height: hp("102.22233006211579%"),
    minHeight: hp("102.22233006211579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1335143540208037%"),
    top: hp("4.461303043886616%")
  },
  View_8_21: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("95.08196721311475%"),
    minHeight: hp("95.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%")
  },
  View_8_22: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_23: {
    width: wp("3.088962108731466%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_24: {
    width: wp("2.279234168164223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_24: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_25: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_26: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_27: {
    width: wp("5.537530814206973%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47464637819193456%")
  },
  ImageBackground_8_36: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_39: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.656189266500213%")
  },
  View_8_40: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_41: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_43: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("64.6174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_44: {
    width: wp("2.944810543657331%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_45: {
    width: wp("4.631643279576812%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_45: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_46: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_47: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_48: {
    width: wp("1.067951994240775%"),
    height: hp("0.819672131147541%"),
    top: hp("2.8688524590163667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47464637819193456%")
  },
  View_8_54: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_55: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_56: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_8_57: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.656189266500213%")
  },
  View_8_58: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_59: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_61: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_62: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_62: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_63: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("40.027322404371574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_64: {
    width: wp("2.985996705107084%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_65: {
    width: wp("1.2465810854313204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_65: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_66: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_67: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_68: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_69: {
    width: wp("5.537530814206973%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47464637819193456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_70: {
    width: wp("4.824574264702333%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.008401132297677805%"),
    justifyContent: "flex-start"
  },
  Text_8_70: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_71: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_78: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217462873%"),
    top: hp("82.10382513661203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_79: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_80: {
    width: wp("2.5535420098846786%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.100494233937397%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_81: {
    width: wp("1.441515650741351%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975391%"),
    justifyContent: "flex-start"
  },
  Text_8_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_8_82: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930726%"),
    top: hp("92.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_83: {
    width: wp("4.757001647446458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32948929159802987%"),
    justifyContent: "flex-start"
  },
  Text_8_83: {
    color: "rgba(55, 58, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_115: {
    width: wp("7.7224052718286655%"),
    top: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_115: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_118: {
    width: wp("6.1573311367380565%"),
    minWidth: wp("6.1573311367380565%"),
    height: hp("40.84699453551913%"),
    minHeight: hp("40.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1738056013179587%"),
    top: hp("-18.98907103825136%")
  },
  ImageBackground_8_119: {
    width: wp("6.1573311367380565%"),
    minWidth: wp("6.1573311367380565%"),
    height: hp("40.84699453551913%"),
    minHeight: hp("40.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1738056013179587%"),
    top: hp("-18.98907103825136%")
  },
  ImageBackground_8_120: {
    width: wp("2.800658978583196%"),
    height: hp("18.579234972677597%"),
    top: hp("9.153005464480877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.574135090609552%")
  },
  ImageBackground_8_121: {
    width: wp("1.4827018121911038%"),
    height: hp("9.836065573770492%"),
    top: hp("13.524590163934434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2331136738055974%")
  },
  View_8_129: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.957990115321245%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_138: {
    width: wp("11.705387875904165%"),
    minWidth: wp("11.705387875904165%"),
    height: hp("102.22233006211579%"),
    minHeight: hp("102.22233006211579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1335143540207895%"),
    top: hp("4.461303043886616%")
  },
  ImageBackground_8_145: {
    width: wp("1.4148861415303715%"),
    height: hp("9.38618456731077%"),
    top: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.798187808896209%")
  },
  View_8_146: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("95.08196721311475%"),
    minHeight: hp("95.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049185%")
  },
  View_8_147: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_148: {
    width: wp("3.088962108731466%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_149: {
    width: wp("2.279234168164223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_149: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_150: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_151: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_152: {
    width: wp("5.537530814206973%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47464637819192035%")
  },
  ImageBackground_8_161: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_164: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.656189266500199%")
  },
  View_8_165: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_166: {
    width: wp("0.4746432359371782%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_168: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_169: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    justifyContent: "flex-start"
  },
  Text_8_169: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_170: {
    width: wp("6.486820428336079%"),
    minWidth: wp("6.486820428336079%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("40.027322404371574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_171: {
    width: wp("2.985996705107084%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_172: {
    width: wp("1.2465810854313204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_172: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_173: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_174: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_175: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_176: {
    width: wp("5.537530814206973%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47464637819192035%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_177: {
    width: wp("4.824574264702333%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.008406159905270272%"),
    justifyContent: "flex-start"
  },
  Text_8_177: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_178: {
    width: wp("6.486820428336079%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_185: {
    width: wp("6.754530477759473%"),
    minWidth: wp("6.754530477759473%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6177924217463016%"),
    top: hp("82.10382513661203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_186: {
    width: wp("6.486820428336079%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_187: {
    width: wp("2.5535420098846786%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1004942339373898%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_188: {
    width: wp("1.441515650741351%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4118616144975249%"),
    justifyContent: "flex-start"
  },
  Text_8_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_8_189: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930868%"),
    top: hp("92.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_190: {
    width: wp("4.4892915980230645%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45304777594727597%"),
    justifyContent: "flex-start"
  },
  Text_8_190: {
    color: "rgba(55, 58, 77, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_224: {
    width: wp("6.1573311367380565%"),
    minWidth: wp("6.1573311367380565%"),
    height: hp("40.84699453551913%"),
    minHeight: hp("40.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1738056013179587%"),
    top: hp("-18.98907103825136%")
  },
  ImageBackground_8_225: {
    width: wp("2.800658978583196%"),
    height: hp("18.579234972677597%"),
    top: hp("15.300546448087431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.621911037891273%")
  },
  View_8_226: {
    width: wp("25.638385502471166%"),
    minWidth: wp("25.638385502471166%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6243822075782535%"),
    top: hp("28.825136612021858%")
  },
  View_8_227: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_228: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_229: {
    width: wp("3.2125205930807246%"),
    minWidth: wp("3.2125205930807246%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.036243822075782%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_230: {
    width: wp("0.6383855024711697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5741350906095564%"),
    justifyContent: "flex-start"
  },
  Text_8_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_231: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2355848434925867%"),
    top: hp("91.39344262295083%")
  },
  View_8_232: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_233: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.885502471169687%"),
    top: hp("0%")
  },
  ImageBackground_8_234: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.276771004942339%"),
    top: hp("0%")
  },
  View_8_235: {
    width: wp("0.7413509060955519%"),
    minWidth: wp("0.7413509060955519%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092894995%"),
    backgroundColor: "rgba(142, 241, 92, 1)"
  },
  View_8_236: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("46.31147540983606%"),
    minHeight: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.912568306010925%")
  },
  View_8_237: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.19672131147542%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_238: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_238: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_239: {
    width: wp("7.7224052718286655%"),
    top: hp("40.30054644808744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_239: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_240: {
    width: wp("4.365733113673806%"),
    minWidth: wp("4.365733113673806%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6886326194398689%"),
    top: hp("0%")
  },
  ImageBackground_8_241: {
    width: wp("4.365733113673806%"),
    minWidth: wp("4.365733113673806%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_242: {
    width: wp("1.8121911037891267%"),
    minWidth: wp("1.8121911037891267%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.276771004942339%"),
    top: hp("8.469945355191264%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_243: {
    width: wp("1.7366831935021592%"),
    height: hp("10.517153713872524%"),
    top: hp("0.7533005677937155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.037754819263539297%")
  },
  ImageBackground_8_247: {
    width: wp("1.544481054365733%"),
    height: hp("10.245901639344263%"),
    top: hp("5.464480874316941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4324546952224049%")
  },
  ImageBackground_8_248: {
    width: wp("6.892363596983757%"),
    height: hp("45.72311151223104%"),
    top: hp("91.19586214993171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7122246680974564%")
  },
  ImageBackground_8_249: {
    width: wp("1.8493121302697373%"),
    height: hp("12.268114350532572%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.498352553542009%")
  },
  View_8_250: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.153212520593081%"),
    top: hp("101.0928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_251: {
    width: wp("1.5032948929159802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.956342668863262%"),
    justifyContent: "flex-start"
  },
  Text_8_251: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_307: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.498352553542009%"),
    top: hp("88.9344262295082%")
  },
  ImageBackground_8_301: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_303: {
    width: wp("0.4942339373970346%"),
    minWidth: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851707%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_304: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041186161449752845%")
  },
  View_8_252: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.957990115321254%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_253: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_254: {
    width: wp("3.2125205930807246%"),
    minWidth: wp("3.2125205930807246%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.036243822075781%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_255: {
    width: wp("0.6383855024711697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5741350906095555%"),
    justifyContent: "flex-start"
  },
  Text_8_255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_256: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2355848434925836%"),
    top: hp("90.77868852459017%")
  },
  View_8_257: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_258: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_259: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.27677100494234%"),
    top: hp("0%")
  },
  View_8_260: {
    width: wp("0.7413509060955519%"),
    minWidth: wp("0.7413509060955519%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3912685337726547%"),
    top: hp("0.06830601092894995%"),
    backgroundColor: "rgba(142, 241, 92, 1)"
  },
  View_8_261: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("46.31147540983606%"),
    minHeight: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.912568306010925%")
  },
  View_8_262: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.19672131147542%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_263: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_263: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_264: {
    width: wp("7.7224052718286655%"),
    top: hp("40.30054644808744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_264: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_265: {
    width: wp("4.365733113673806%"),
    minWidth: wp("4.365733113673806%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6886326194398666%"),
    top: hp("0%")
  },
  View_8_267: {
    width: wp("1.8121911037891267%"),
    height: hp("12.021857923497267%"),
    top: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9654036243822066%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_268: {
    width: wp("1.8121911037891267%"),
    height: hp("11.637158211463136%"),
    top: hp("0.1923107710040881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_270: {
    width: wp("0.7825370675453047%"),
    height: hp("5.191256830601093%"),
    top: hp("13.251366120218584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7619439868204267%")
  },
  ImageBackground_8_271: {
    width: wp("6.892363596983757%"),
    height: hp("45.72311151223104%"),
    top: hp("91.19586214993171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7122246680974573%")
  },
  ImageBackground_8_272: {
    width: wp("3.3636055432591445%"),
    height: hp("22.31375480610165%"),
    top: hp("-11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.221606686637662%")
  },
  View_8_273: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930797%"),
    top: hp("101.0928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_274: {
    width: wp("1.5032948929159802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9563426688632628%"),
    justifyContent: "flex-start"
  },
  Text_8_274: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_314: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4983525535420075%"),
    top: hp("88.9344262295082%")
  },
  ImageBackground_8_315: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_316: {
    width: wp("0.4942339373970346%"),
    minWidth: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851707%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_317: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975462%")
  },
  View_8_275: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.915980230642504%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_276: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_277: {
    width: wp("3.2125205930807246%"),
    minWidth: wp("3.2125205930807246%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.036243822075786%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_278: {
    width: wp("0.6383855024711697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.574135090609552%"),
    justifyContent: "flex-start"
  },
  Text_8_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_8_279: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2355848434925853%"),
    top: hp("90.77868852459017%")
  },
  View_8_280: {
    width: wp("1.5238879736408566%"),
    minWidth: wp("1.5238879736408566%"),
    height: hp("1.707650273224044%"),
    minHeight: hp("1.707650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_281: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_282: {
    width: wp("0.2471169686985173%"),
    minWidth: wp("0.2471169686985173%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3912685337726529%"),
    top: hp("0%")
  },
  View_8_283: {
    width: wp("0.7413509060955519%"),
    minWidth: wp("0.7413509060955519%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825370675453058%"),
    top: hp("0.06830601092894995%"),
    backgroundColor: "rgba(142, 241, 92, 1)"
  },
  View_8_284: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("46.31147540983606%"),
    minHeight: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.912568306010925%")
  },
  View_8_285: {
    width: wp("7.7224052718286655%"),
    minWidth: wp("7.7224052718286655%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.19672131147542%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_286: {
    width: wp("7.7224052718286655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_286: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_287: {
    width: wp("7.7224052718286655%"),
    top: hp("40.30054644808744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_287: {
    color: "rgba(56, 79, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_288: {
    width: wp("4.365733113673806%"),
    minWidth: wp("4.365733113673806%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6886326194398684%"),
    top: hp("0%")
  },
  View_8_290: {
    width: wp("1.8121911037891267%"),
    height: hp("12.021857923497267%"),
    top: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9654036243822084%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_291: {
    width: wp("1.8121911037891267%"),
    height: hp("12.021857923497267%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_292: {
    width: wp("1.7366831935021592%"),
    height: hp("11.52094752410722%"),
    top: hp("0.25047760843580136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0377523054597404%")
  },
  ImageBackground_8_296: {
    width: wp("1.8533772652388796%"),
    height: hp("12.295081967213115%"),
    top: hp("-3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8031301482701814%")
  },
  ImageBackground_8_297: {
    width: wp("6.892363596983757%"),
    height: hp("45.72311151223104%"),
    top: hp("91.19586214993171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7122221542936558%")
  },
  ImageBackground_8_298: {
    width: wp("0.8181638733362642%"),
    height: hp("5.427600777214342%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.74546952224053%")
  },
  View_8_299: {
    width: wp("5.415980230642504%"),
    minWidth: wp("5.415980230642504%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1532125205930832%"),
    top: hp("101.0928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_300: {
    width: wp("1.5032948929159802%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.956342668863261%"),
    justifyContent: "flex-start"
  },
  Text_8_300: {
    color: "rgba(68, 89, 132, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_308: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.498352553542013%"),
    top: hp("88.9344262295082%")
  },
  ImageBackground_8_309: {
    width: wp("0.9884678747940692%"),
    minWidth: wp("0.9884678747940692%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_310: {
    width: wp("0.4942339373970346%"),
    minWidth: wp("0.4942339373970346%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24711696869851707%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_8_311: {
    width: wp("0.41186161449752884%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092895989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04118616144975107%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
