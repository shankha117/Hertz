<template>
    <div class="camera">
        <video autoplay class="live-feed"></video>
            <button v-show="getstartvideo" class="start" @click.stop="startvideo">Start Cam</button>
            <button v-show="getstopvideo" class="stop" @click.stop="stopvideo">Stop Cam</button>
    </div>
</template>

<script>
var localStream;
export default {
name:"camera",
	data: function () {
		return {   
		}
    },
methods:{
    startvideo(){
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
            navigator.mediaDevices.getUserMedia({video:{
            			width: { min: 1280 },
						height: { min: 720 }
            }}).then(
                stream=>{
                    const video = document.querySelector("video");
                    localStream = stream;
                    video.srcObject = stream;
                }
            )
        }
        else{
            alert("cant play video")
        }
    },
    stopvideo(){
        localStream.getVideoTracks()[0].stop();
        const video_feed = document.querySelector("#q");
        video_feed.style.background="white";
        }
    },
    
computed: {
    getstartvideo() {
      return this.$store.getters.startvideo
    },
    getstopvideo(){
        return this.$store.getters.stopvideo
    },
    getsnap(){
        return this.$store.getters.snap
    }
}
}
</script>

<style lang="scss">
.camera{
    height: 50vh;
    text-align: center;
}
.live-feed{
    margin: 0 auto;
    display: block;
    width: 45%;
    height: 100%;
    max-width: 1280px;
    max-height: 720px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.385);
    background-color: #fff;

}
// .start{
//     display: inline;
// }
  .start,.stop{
    margin: 35px 0px 0px 20px ;
    display: inline-block;
    border-radius: 20px;
    border: 0px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 0.1s ease-in;
    cursor: pointer;
    background: linear-gradient(to bottom right, #7fd625, #009345);
    
  &:active {
    transform: scale(0.9);
    
  }
  &:focus {
    outline: none;
  }
  }

  

</style>
