import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class VideoPlayer {

    private assets: MRE.AssetContainer;
    private videoStream: MRE.VideoStream;

    constructor(private context: MRE.Context) {
        this.assets = new MRE.AssetContainer(context);
        this.context.onStarted(() => this.init());
    }

    private async init(): Promise<boolean> {
        this.videoStream = this.assets.createVideoStream('videoStream', { uri: "https://www.youtube.com/watch?v=nqOU2CGeAvk" });
        let test = MRE.Actor.Create(this.context, { });
	await Promise.all([test.created()]);
        test.startVideoStream(this.videoStream.id, { volume: 0.5 });
	return true;
    }
}
