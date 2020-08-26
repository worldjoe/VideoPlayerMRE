import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class VideoPlayer {

    private assets: MRE.AssetContainer;
    private videoStream: MRE.VideoStream;

    constructor(private context: MRE.Context, private params: MRE.ParameterSet) {
        this.assets = new MRE.AssetContainer(context);
        this.context.onStarted(() => this.init());
    }

    private async init() {
        this.videoStream = this.assets.createVideoStream('videoStream', { uri: "https://www.youtube.com/watch?v=nqOU2CGeAvk" });
        let test = MRE.Actor.Create(this.context, { });
        test.startVideoStream(this.videoStream.id, { volume: 0.5 });
    }
}
