// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
        this.size = 30;
    }
    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
         this.load.image('sky', 'assets/sky.png');
         this.load.image('back', 'assets/back.png');
         this.load.image('ground', 'assets/platform.png');
         this.load.image('alien1', 'assets/alien1.png');
         this.load.image('alien2', 'assets/alien2.png');
         this.load.image('alien3', 'assets/alien3.png');
         this.load.image('platform', 'assets/platform.png');
         this.load.image('block', 'assets/block.png');
         this.load.image('bomb', 'assets/bomb.png');
         this.load.image('star', 'assets/star.png');
         this.load.image('coin', 'assets/coin.png');
    }
    // シーン初期化処理
    create() {
        // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'sky');
        let randSterx = Phaser.Math.Between(50, 750) ; // y は　50～750の間の値
        let randStery = Phaser.Math.Between(50, 200) ;  // y は　50～200の間の値
        // 星を(200,200)に追加
        this.add.image(randSterx, randStery, 'star');
        let randx = Phaser.Math.Between(50, 750) ; // y は　50～750の間の値
        let randy = Phaser.Math.Between(50, 200) ;  // y は　50～200の間の値
        // エイリアン1を(200,200)に追加
        this.player1 = this.add.image(375, 350, 'alien1');
        // エイリアンを(200,200)に追加
        this.player2 = this.add.image(500, 280, 'alien2');
        // エイリアン3を(200,200)に追加
         this.player3 = this.add.image(500, 350, 'alien3');
        // プレイヤーの移動方向フラグを設定　１：右向き　−１：左向き
        this.player2_direction = 1;
        this.player1_direction = 1;
        this.player3_direction = 1;
    }
    // 毎フレーム実行される繰り返し処理
    update() {
         if (this.player1.x >= D_WIDTH - 100) this.player1_direction = -1;
         if (this.player1.x <= 100) this.player1_direction = 1;
         // プレイヤーの移動
         if (this.player3_direction == 1) {
            this.player1.y += 3;// 横方向へ移動を設定
        } else {
            this.player1.y -= 3;// 横方向へ移動を設定
        }
         // プレイヤーの向きフラグを変更
         if (this.player2.x >= D_WIDTH - 100) this.player2_direction = -1;
         if (this.player2.x <= 100) this.player2_direction = 1;
         // プレイヤーの移動
         if (this.player2_direction == 1) {
             this.player2.x += 20;// 横方向へ移動を設定
         } else {
             this.player2.x -= 20;// 横方向へ移動を設定
         }
         // プレイヤーの向きフラグを変更
         if (this.player3.x >= D_WIDTH - 100) this.player3_direction = -1;
         if (this.player3.x <= 100) this.player3_direction = 1;
         // プレイヤーの移動
         if (this.player3_direction == 1) {
            this.player3.x += 8;// 横方向へ移動を設定
            this.player3.y += 8;// 横方向へ移動を設定
        } else {
            this.player3.x -= 8;// 横方向へ移動を設定
            this.player3.y -= 8;// 横方向へ移動を設定
        }
    }

}